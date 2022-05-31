import { User } from '../../models/User'

const LS_USER_KEY = 'user'

export function getUser(): User {
  const lsUser = localStorage.getItem(LS_USER_KEY)
  if (lsUser) {
    return new User(JSON.parse(lsUser))
  }
  return new User()
}

export function setUser(user: User): void {
  localStorage.setItem(LS_USER_KEY, user.stringify())
}

export function removeUser(): void {
  localStorage.removeItem(LS_USER_KEY)
}
