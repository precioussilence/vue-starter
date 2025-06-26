export interface User {
  order: number
  realname: string
  username: string
  gender: string
  depart: string
  phone: string
  email: string
  address: string
  status: string
}

export interface Filter {
  realname: string
  depart: string
  phone: string
  email: string
  gender: string | null
  status: string | null
}
