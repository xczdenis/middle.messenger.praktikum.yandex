// class Component<TState extends object = {}> {
//   state: {} = {}
//   name: string
//   targetElement: HTMLElement
//   private _node: Element
//   private _models: string[]
//
//   constructor(name: string, targetElement: HTMLElement) {
//     this.name = name
//     this.targetElement = targetElement
//
//     this.prepareTemplate()
//     this.prepareVariables()
//     this.bindVariables()
//     this.bindActions()
//     this.render()
//   }
//
//   prepareTemplate(): void {
//     const template = document.getElementById(this.name)
//     if (!template) {
//       throw new Error(`Component  with name ${this.name} is not found`)
//     } else {
//     }
//     this._node = template.children[0]
//   }
//
//   prepareVariables(): void {
//     const rawModels: string[] = Array.from(
//       this._node.querySelectorAll('[e-model]')
//     ).map((item) => item.getAttribute('e-model'))
//     this._models = [...new Set(rawModels)]
//   }
//
//   bindVariables(): void {}
//
//   bindActions(): void {}
//
//   render(): void {}
// }
