import { setCookie } from './setCookie'

function deleteCookie(name: string): void {
  setCookie(name, '', {
    'max-age': -1,
  })
}

export { deleteCookie }
