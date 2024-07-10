export interface User {
  userName: string;
  token: string;
}

export interface UserData {
  id: number
  nome: string
  passwordHash: string
  passwordSalt: string
  dataCriacao: string
  dataAtualizacao: any
}

export interface AddUser {
  nome: string
  password: string
  confirmPassword: string
}
