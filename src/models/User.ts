class User {
  id: number

  login: string

  first_name: string

  second_name: string

  constructor(data: { id?: number; login?: string; first_name?: string; second_name?: string } = {}) {
    this.id = data.id ?? 0
    this.login = data.login ?? ''
    this.first_name = data.first_name ?? ''
    this.second_name = data.second_name ?? ''
  }

  stringify(): string {
    return JSON.stringify({
      id: this.id,
      login: this.login,
      first_name: this.first_name,
      second_name: this.second_name,
    })
  }
}

export { User }
