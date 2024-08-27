import Dono from "./Dono";

export default class Cachorro {
    constructor(nome: string, raca: string, cor: string, dono: Dono){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.dono = dono;
    }

    nome: string;
    raca: string;
    cor: string;
    dono: Dono;

exibirCachorro(){
    //nao precisa colocar que é function
    console.log(
            `O cachorro ${this.nome} é da raça ${this.raca} é da cor ${this.cor}`)
    }
exibirDono(){
    console.log(`O dono ${this.nome} é ${this.dono.nome}`)
}
}