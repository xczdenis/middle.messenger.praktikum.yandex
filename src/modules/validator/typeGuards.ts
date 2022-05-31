export function isHTMLInputElement(element: Element): element is HTMLInputElement {
  return element.tagName === 'INPUT'
}
