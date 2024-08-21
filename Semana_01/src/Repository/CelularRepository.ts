export type Celular = {
    tamanhoTela: number;
    marca: string;
    cor: String
}
export function cadastrarCelular(parametros: Celular) {//CADASTRAR NO BANCO DE DADOS
    console.log("Celular cadastrado no banco de dados...")
    parametros.cor
    parametros.marca
    parametros.tamanhoTela
}