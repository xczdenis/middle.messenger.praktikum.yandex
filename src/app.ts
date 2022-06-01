import BaseComponent from './modules/engine/shared/BaseComponent'
import t from './modules/templator/index'
import { TBaseProps, TComponentData } from './modules/engine/shared/types'
import { urls } from './urls'

const template = `<main class='page'>
  <div id='routerView' style='height: 100vh'/>
</main>
`

type TProps = TBaseProps

class Component extends BaseComponent {
  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'App', props, events, validator } = data
    super(name, props, events, validator)
  }

  render(): string {
    return t.compile(template)({})
  }

  mounted() {
    const page = document.getElementById('app')
    if (page) {
      const theme = localStorage.getItem('theme')
      if (theme) {
        page.classList.add(theme)
      }
    }
    urls.start()
  }
}

const createInstance = (data: TComponentData<TProps> = {}): Component => {
  return new Component(data)
}

export { createInstance as App }
