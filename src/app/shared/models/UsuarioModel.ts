export interface UsuarioModelList {
    id: number,
    nome: string,
    email: string, 
    dataNascimento: string
}


export interface UsuarioModelUpdate {
    email: string, 
    dataNascimento: string
}