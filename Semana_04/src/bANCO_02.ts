import leia from "readline-sync";
import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente";
import Titular from "./Titular";



// export default class Banco {
//     private contas: ContaBancaria[] = [];

//     public transferir(){
//         var numeroCOntaOrigem = leia.question("Informe o numero da sua conta: ");
//         var indexOrigem;
//         for(var i = 0; i < this.contas.length; i++){
//             if(this.contas[i].getNumero() === numeroContaOrigem){
//                 indexOrigem = i;
//             }
//         }
//         if(indexOrigem === underfined){
//             console,log("A conta que voce digitou nao existe ...")
//         }


//     var numeroContaDestino = leia.question("Informe o numero conta de destino: ");
//     var indexDestino = this.contas.findIndex(conta => conta.getNumero() === numeroContaDestino);
//     if(indexDestino === -1){
//         console.log("A conta de destino nao existe . . .");
//         return;
//     }
//     var valor = leia.questionFloat("Informe o valor da Transferencia: ");
//     if(valor > this.contas[indexOrigem].getSaldo()){
//         console.log("Voce nao tem saldo suficiente");
//         return;
//     }
//     this.contas[indexOrigem].sacar(valor);
//     this.contas[indexDestino].depositar(valor);
// }
// }