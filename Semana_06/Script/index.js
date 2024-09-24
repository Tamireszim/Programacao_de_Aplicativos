function pegarInformacoes(){
Evento.preventDefault();

var nome = document.getElementsById("name").value;

console.log(nome);
console.log(email);
console.log(message)
}
function validarCampo(){
    if(Element.value === ""){
        Element.style.borderColor = "red"   
    }
}
function capturarTecla(event){
    console.log(event)
}
function verificarDisabled(){
    var nome = documento.getElementsById("name").value;
    var email = documento.getElementsById("email").value;
    var message = documento.getElementsById("message").value;
    
    if(nome !== "" && email !== "" && message !==""){
        document,getElementsById("enviar").disabled = false;
    }else{
        document.getElementById("enviar").disabled = true;
    }
    }
