import { expect } from 'chai'
import BaseComponent from '../BaseComponent'

describe('Test class BaseComponent', () => {
  describe('constructor', () => {
    it('should set passed name', async () => {
      class TestBlock extends BaseComponent {
        constructor() {
          super('test-name')
        }
      }

      const instance = new TestBlock()

      expect(instance.name).to.equal('test-name')
    })
    it('should set passed props', async () => {
      class TestBlock extends BaseComponent {
        constructor() {
          super('test-name', { prop: 1 })
        }
      }

      const instance = new TestBlock()

      expect(instance.props.prop).to.equal(1)
    })
    it('should set passed events', async () => {
      const testFn = () => {}

      class TestBlock extends BaseComponent {
        constructor() {
          super('test-name', { prop: 1 }, { testFn })
        }
      }

      const instance = new TestBlock()

      expect(instance.events.testFn).to.equal(testFn)
    })
  })

  describe('component life cycle hooks', () => {
    it('hook "beforeCreate" should be called before hook "created"', async () => {
      let test = 0

      class TestBlock extends BaseComponent {
        constructor() {
          super('test-name')
        }

        beforeCreate() {
          test = 1
        }

        created() {
          test = 2
        }
      }

      new TestBlock()

      expect(test).to.equal(2)
    })
    it('hook "beforeMount" should be called before hook "mounted"', async () => {
      let test = 0

      class TestBlock extends BaseComponent {
        constructor() {
          super('test-name')
        }

        beforeMount() {
          test = 1
        }

        mounted() {
          test = 2
        }
      }

      const instance = new TestBlock()
      instance.mount('app')

      expect(test).to.equal(2)
    })
    it('hook "beforeUpdate" should be called before hook "updated"', async () => {
      let test = 0

      class TestBlock extends BaseComponent {
        constructor() {
          super('test-name', { prop: 1 })
        }

        beforeUpdate() {
          test = 1
        }

        updated() {
          test = 2
        }
      }

      const instance = new TestBlock()
      instance.mount('app')
      instance.props.prop = 3

      expect(test).to.equal(2)
    })
  })

  describe('method "mount"', () => {
    it('should mount HTMLElement', async () => {
      const fakeId = 'test-id'

      class TestBlock extends BaseComponent {
        constructor() {
          super('test-name')
        }

        render(): string {
          return `<div id='${fakeId}'></div>`
        }
      }

      const instance = new TestBlock()
      instance.mount('#app')
      const elementApp = document.querySelector('#app')
      const mountedElement = elementApp?.querySelector(`#${fakeId}`)

      expect(mountedElement?.id).to.equal(fakeId)
    })
  })
})
