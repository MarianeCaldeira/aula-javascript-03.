function questao1(){
  var idade = prompt ("você é maior de 18 anos?");
  if (idade == "sim"){
    console.log("Que legal! Você já pode ter a carteira de habilitação.");
  }
  else {
    console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação.");
  }
}

function questao2(){
  var pergunta = prompt ("você já terminou o ensino médio?");
  if (pergunta == "sim"){
    console.log("Poxa, que legal!");
  }
  else {
    console.log("Falta pouco! Logo você termina.")
  }
}