//----Script do botao Sobre----
var botaoconfirmar1 = document.querySelector("#botao-confirmar"); 
botaoconfirmar1.addEventListener("click",function(){ 
    var input1 = document.querySelector("#input-lista1");
    if(confirm("Você deseja confirmar as alterações no menu sobre?")){
        if(input1.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valor = input1.value; 
        localStorage.setItem("valorCampo", valor); 

    }
}});
 
var valorArmazenado = localStorage.getItem("valorCampo"); 
var link1 = document.querySelector("#link1"); 
link1.innerHTML = valorArmazenado;  
    

var botaotCancela1 = document.querySelector("#botao-cancela"); 
botaotCancela1.addEventListener("click",function(event){ 
        localStorage.setItem("valorCampo", "sobre");
})



//----Scrip do botao Objetivos----
var botaoconfirmar2 = document.querySelector("#botao-confirmar2"); 
botaoconfirmar2.addEventListener("click",function(){ 
    var input2 = document.querySelector("#input-lista2");
    if(confirm("Você deseja confirmar as alterações no menu objetivos?")){
        if(input2.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valor2 = input2.value; 
        localStorage.setItem("valorCampo2", valor2); 

    }
}});
 
var valorArmazenado2 = localStorage.getItem("valorCampo2"); 
var link2 = document.querySelector("#link2"); 
link2.innerHTML = valorArmazenado2;  
    

var botaotCancela2 = document.querySelector("#botao-cancela2"); 
botaotCancela2.addEventListener("click",function(event){ 
        localStorage.setItem("valorCampo2", "objetivos");
})

//----Scrip do botao Contatos----

var botaoconfirmar3 = document.querySelector("#botao-confirmar3"); 
botaoconfirmar3.addEventListener("click",function(){ 
    var input3 = document.querySelector("#input-lista3");
    if(confirm("Você deseja confirmar as alterações no menu contatos?")){
        if(input3.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valor3 = input3.value; 
        localStorage.setItem("valorCampo3", valor3); 

    }
}});
 
var valorArmazenado3 = localStorage.getItem("valorCampo3"); 
var link3 = document.querySelector("#link3"); 
link3.innerHTML = valorArmazenado3;  
    

var botaotCancela3 = document.querySelector("#botao-cancela2"); 
botaotCancela3.addEventListener("click",function(event){ 
        localStorage.setItem("valorCampo3", "contatos");
})

//----Scrip do botao Participantes----

var botaoconfirmar4 = document.querySelector("#botao-confirmar4"); 
botaoconfirmar4.addEventListener("click",function(){ 
    var input4 = document.querySelector("#input-lista4");
    if(confirm("Você deseja confirmar as alterações no menu participantes?")){
        if(input4.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valor4 = input4.value; 
        localStorage.setItem("valorCampo4", valor4); 

    }
}});
 
var valorArmazenado4 = localStorage.getItem("valorCampo4"); 
var link4 = document.querySelector("#link4"); 
link4.innerHTML = valorArmazenado4;  
    

var botaotCancela4 = document.querySelector("#botao-cancela4"); 
botaotCancela4.addEventListener("click",function(event){ 
        localStorage.setItem("valorCampo4", "participantes");
})

