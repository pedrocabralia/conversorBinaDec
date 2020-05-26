var btn = document.querySelector("button").addEventListener("click", conversor);

var valorInput = document.querySelector("#binario")

valorInput.addEventListener("input", function (){

 if (valorInput.value == 0 ||  valorInput.value == 1){
   console.log("valor correto")
 }
 else{
    console.log("valor errado")
 }
});

function conversor(){

   var resultado=  parseInt(valorInput.value, 2);

   var valorSpam = document.querySelector("span").innerHTML = resultado; 

}


