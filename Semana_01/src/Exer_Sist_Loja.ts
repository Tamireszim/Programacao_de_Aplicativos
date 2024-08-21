//você está criando um sistem para uma loja, para cadastrar produtos. principalmente crie um tipo chamado categoria com alguns atributos e
//depois crie um tipo com produtos, com alguns atributos e adicione como um dos atributos do produtos a categoria dele. Ao final, solicite 
//informações ao usuario e crie o objeto completo

import leia from 'readline-sync';
type Categoria = {
    cama: string;
    mesa: string;
    banho: string;
    roupa: string;
}
type Produto = {
    cor: string;
    tamanho: string
    modelo: String
}
var categoria = leia.question("Informe a Categoria: ");
var cor = leia.question("Informe a cor: ");
var tamanho = leia.questionFloat("Informe o tamanho: ");

// var Categoria: Categoria = {
//     cor: cor,
//     tamanho: tamanho
//     modelo: modelo
// }
// cadastrarCategoria(categoria)


// function cadastrarCategoria(parametro: Categoria)
//     console.log("Categoria cadastrada no banco de dados...")
//     parametros.cor
//     parametros
