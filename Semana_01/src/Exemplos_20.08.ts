// var Obj1: Celular = {
//     tamanhoTela: 7.6,
//     marca: 'samsung',
//     cor: "preto",
// }

//outro arquivo
import leia from 'readline-sync';
import { Celular, cadastrarCelular } from './Repository/CelularRepository';
import { Pessoa } from './Repository/PessoaRepository';


var cor = leia.question("Informe a cor do celular: ")
var marca = leia.question("Informe a marca: ")
var tamanho = leia.questionFloat("Informe o tamanho de tela: ")

var celular: Celular = {
    cor: cor,
    marca: marca,
    tamanhoTela: tamanho
}
cadastrarCelular(celular)
console.table(celular)


var nome = leia.question("Digite o nome: ");
var cpf = leia.question("Digite o CPF: ");
var dataNascimento = leia.question("Digite a data de Nascimento: ");
var telefone = leia.question("Digite numero de telefone: ");
var email = leia.question("Digite o email: ");

const pessoa: Pessoa = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dataNascimento,
    contatos: {
        telefones: [telefone],
        emails: [email]
    },
    celular: celular
}
console.log(pessoa)