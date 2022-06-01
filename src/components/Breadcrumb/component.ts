import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import { TComponentData } from '../../modules/engine/shared/types'
import { router } from '../../modules/engine/router/router'

type TProps = {
  items?: {
    href: string
    text: string
  }[]
}

class Component extends BaseComponent {
  props: TProps

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Breadcrumb', props, events, validator } = data
    super(name, props, events, validator)
  }

  render(): string {
    console.log(`${this.id}-${this.name}.render`)
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  mounted() {
    const element = this.getElement()
    const items = this.props.items
    if (element) {
      element.querySelectorAll('a').forEach((item, index) => {
        console.log(item)
        item.addEventListener('click', (e) => {
          e.preventDefault()
          if (items && items.length >= index + 1) {
            const bc = items[index]
            if (bc.href && bc.href !== '#') {
              console.log(1)
              router.go(bc.href)
            }
          }
        })
      })
    }
  }
}

export { Component as ComponentBreadcrumb, TProps }
