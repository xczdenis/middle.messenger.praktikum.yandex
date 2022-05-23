export function isInput(value: Element | null): value is HTMLInputElement {
  return !!value && value.tagName === 'INPUT'
}
