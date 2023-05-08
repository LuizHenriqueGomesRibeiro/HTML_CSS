var textos=[
    "Coloque o seu nome.",
    "Coloque o seu e-mail.",
    "Preencha todos os quésitos do formulário.",
    "Preencha a caixa com um comentário simples"
]
function texto(i){
    document.getElementById("texto").innerHTML=textos[i];
}
function evento(){
    document.getElementById("meuFormulário").onsubmit=function texto(i){
        return confirm("Você confirma esses dados para serem submetidos?");
    }
    document.getElementById("meuFormulário").onreset=function texto(i){
        return confirm("Você quer resetar as informações?");
    }
}
