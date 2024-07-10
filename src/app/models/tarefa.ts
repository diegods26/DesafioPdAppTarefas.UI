export interface Tarefa {
  id?: number
  titulo: string
  descricao: string
  status: number
  dataCriacao?: string
  dataAtualizacao?: Date
  idUsuario: number
}
