//---Participante 1 - Vih---
var botaoParticipante1 = document.querySelector("#participanteConfirmar1"); 
botaoParticipante1.addEventListener("click",function(){ 
    var pegaInput1 = document.querySelector("#participanteVih");
    if(confirm("Você deseja confirmar as alterações no nome da Vitória Dambros?")){
        if(pegaInput1.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorDoInput = pegaInput1.value; 
        localStorage.setItem("ValorSalvo1", valorDoInput); 
    }
}});
 
var nomeArmazenado1 = localStorage.getItem("ValorSalvo1"); 
var nomeUsuario = document.querySelector(".nome-vitoria"); 
nomeUsuario.innerHTML = nomeArmazenado1;  
    
var botaodeCancelar = document.querySelector("#participanteCancelar1"); 
botaodeCancelar.addEventListener("click",function(event){ 
        localStorage.setItem("ValorSalvo1", "Vitória Dambros");
})

//---Participante 2 - Liu---
var botaoParticipante2 = document.querySelector("#participanteConfirmar2"); 
botaoParticipante2.addEventListener("click",function(){ 
    var pegaInput2 = document.querySelector("#participanteLiu");
    if(confirm("Você deseja confirmar as alterações no nome do Liu Brian?")){
        if(pegaInput2.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorDoInput2 = pegaInput2.value; 
        localStorage.setItem("ValorSalvo2", valorDoInput2); 
    }
}});
 
var nomeArmazenado2 = localStorage.getItem("ValorSalvo2"); 
var nomeUsuario2 = document.querySelector(".nome-liu"); 
nomeUsuario2.innerHTML = nomeArmazenado2;  
    
var botaodeCancelar2 = document.querySelector("#participanteCancelar2"); 
botaodeCancelar2.addEventListener("click",function(event){ 
        localStorage.setItem("ValorSalvo2", "Liu Brian");
})

//---Participante 3 laura---
var botaoParticipante3 = document.querySelector("#participanteConfirmar3"); 
botaoParticipante3.addEventListener("click",function(){ 
    var pegaInput3 = document.querySelector("#participanteLaura");
    if(confirm("Você deseja confirmar as alterações no nome da Laura?")){
        if(pegaInput3.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorDoInput3 = pegaInput3.value; 
        localStorage.setItem("ValorSalvo3", valorDoInput3); 
    }
}});
 
var nomeArmazenado3 = localStorage.getItem("ValorSalvo3"); 
var nomeUsuario3 = document.querySelector(".nome-laura"); 
nomeUsuario3.innerHTML = nomeArmazenado3;  
    
var botaodeCancelar3 = document.querySelector("#participanteCancelar3"); 
botaodeCancelar3.addEventListener("click",function(){ 
        localStorage.setItem("ValorSalvo3", "Laura Quaglioto");
});

//---Participante 4 Bruno---

var botaoParticipante4 = document.querySelector("#participanteConfirmar4"); 
botaoParticipante4.addEventListener("click",function(){ 
    var pegaInput4 = document.querySelector("#participanteBruno");
    if(confirm("Você deseja confirmar as alterações no nome do Bruno?")){
        if(pegaInput4.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorDoInput4 = pegaInput4.value; 
        localStorage.setItem("ValorSalvo4", valorDoInput4); 
    }
}});
 
var nomeArmazenado4 = localStorage.getItem("ValorSalvo4"); 
var nomeUsuario4 = document.querySelector(".nome-bruno"); 
nomeUsuario4.innerHTML = nomeArmazenado4;  
    
var botaodeCancelar4 = document.querySelector("#participanteCancelar4"); 
botaodeCancelar4.addEventListener("click",function(){ 
        localStorage.setItem("ValorSalvo4", "Bruno Yathan");
});

//---Participante 5 Eric---

var botaoParticipante5 = document.querySelector("#participanteConfirmar5"); 
botaoParticipante5.addEventListener("click",function(){ 
    var pegaInput5 = document.querySelector("#participanteEric");
    if(confirm("Você deseja confirmar as alterações no nome do Eric?")){
        if(pegaInput5.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorDoInput5 = pegaInput5.value; 
        localStorage.setItem("ValorSalvo5", valorDoInput5); 
    }
}});
 
var nomeArmazenado5 = localStorage.getItem("ValorSalvo5"); 
var nomeUsuario5 = document.querySelector(".nome-eric"); 
nomeUsuario5.innerHTML = nomeArmazenado5;  
    
var botaodeCancelar5 = document.querySelector("#participanteCancelar5"); 
botaodeCancelar5.addEventListener("click",function(){ 
        localStorage.setItem("ValorSalvo5", "Eric Esteves");
});

//---Participante 6 Gustavo---

var botaoParticipante6 = document.querySelector("#participanteConfirmar6"); 
botaoParticipante6.addEventListener("click",function(){ 
    var pegaInput6 = document.querySelector("#participanteGustavo");
    if(confirm("Você deseja confirmar as alterações no nome do Gustavo?")){
        if(pegaInput6.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorDoInput6 = pegaInput6.value; 
        localStorage.setItem("ValorSalvo6", valorDoInput6); 
    }
}});
 
var nomeArmazenado6 = localStorage.getItem("ValorSalvo6"); 
var nomeUsuario6 = document.querySelector(".nome-gustavo"); 
nomeUsuario6.innerHTML = nomeArmazenado6;  
    
var botaodeCancelar6 = document.querySelector("#participanteCancelar6"); 
botaodeCancelar6.addEventListener("click",function(){ 
        localStorage.setItem("ValorSalvo6", "Gustavo Schmitt");
});

