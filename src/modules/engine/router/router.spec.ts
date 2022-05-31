import { expect } from 'chai'
import { router } from './router'
import { Login } from '../../../pages/PublicPages/Login'
import { ComponentLogin } from '../../../pages/PublicPages/Login/component'

describe('Test "Router"', () => {
  describe('.use', () => {
    it('should return Router instance', () => {
      const result = router.use('/', Login())
      expect(result).to.equal(router)
    })
  })
  describe('.go', () => {
    it('should mount new Block', () => {
      const fakeId = 'test-id'

      class FakeLogin extends ComponentLogin {
        mount(): void {
          const div = document.createElement('div')
          div.id = fakeId
          document.body.append(div)
        }
      }

      router.use('login', new FakeLogin())

      router.go('login')

      expect(document.getElementById(fakeId)?.id).to.equal(fakeId)
    })
  })
})
