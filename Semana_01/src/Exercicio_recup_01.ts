import leia from 'readline-sync'

var nomes: string[] = [];
var idades: number[] = [];

var nomeNova: string;
var idadeNova: number;

var nomeVelha: string;
var idadeVelha: number;


function pedirInfoUsuario(qtd:number){
    for(var i = 0; i < qtd; i++){
    var nome = leia.question("Informe o nome : ");
    nomes.push(nome);
    var idade = leia.questionInt("Informe a idade: ");
    idades.push(idade);
    }
}

function pessoaMaisNova(){
    for(var i = 0; i < idades.length; i++){
        if(idadeNova === undefined || idades[i] < idadeNova){
            // if(!idadeNova || idades[i] < idadeNova) - idade nova não existe?
            idadeNova = idades[i];
            nomeNova = nomes[i];

        }
    }
}

//forEach é a mesma coisa do FOR normal
function pessoaMaisVelha(){
    idades.forEach((idade, index) => {
        if(idadeVelha === undefined || idades[index] > idadeVelha){
            idadeVelha = idades[index];
            nomeVelha = nomes[index];
        }
        })

        console.log(`A pesssoa mais velha é ${nomeVelha} com ${idadeVelha} anos`);
        console.log(`A pessoa mais nova é ${nomeNova} com ${idadeNova} anos`);

}
pedirInfoUsuario(5);
pessoaMaisNova();
pessoaMaisVelha();
