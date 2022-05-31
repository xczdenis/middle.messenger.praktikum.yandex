export function isInput(value: Element | null | undefined): value is HTMLInputElement {
  return !!value && value.tagName === 'INPUT'
}

export function isForm(value: Element | null | undefined): value is HTMLFormElement {
  return !!value && value.tagName === 'FORM'
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}
