//Titulo principal dos endereços/Contatos
var botaoContatos = document.querySelector("#contatosConfirmar"); 
botaoContatos.addEventListener("click",function(){ 
    var inputContatos = document.querySelector("#inputContatos");
    if(confirm("Você deseja confirmar as alterações no titulo dos contatos?")){
        if(inputContatos.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorContatos = inputContatos.value; 
        localStorage.setItem("contatosTitulo", valorContatos); 
    }
}});
 
var tituloContatos = localStorage.getItem("contatosTitulo"); 
var contatosT = document.querySelector(".titulo-principal"); 
contatosT.innerHTML = tituloContatos; 
    
var contatoCancela = document.querySelector("#contatosDesfazer"); 
contatoCancela.addEventListener("click",function(){ 
        localStorage.setItem("contatosTitulo", "Contatos e endereço");
});


//Endereço - 1
var botaoContatos1 = document.querySelector("#contatosConfirmar1"); 
botaoContatos1.addEventListener("click",function(){ 
    var endereco1 = document.querySelector("#endereço1");
    if(confirm("Você deseja confirmar as alterações no primeiro endereço?")){
        if(endereco1.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var enderecoSalvo1 = endereco1.value; 
        localStorage.setItem("enderecoArmazenado1", enderecoSalvo1); 
    }
}});
 
var endereco1Salvo = localStorage.getItem("enderecoArmazenado1"); 
var inputEndereco = document.querySelector("#email1"); 
inputEndereco.innerHTML = endereco1Salvo; 
    
var contatosDesfazer1 = document.querySelector("#contatosDesfazer1"); 
contatosDesfazer1.addEventListener("click",function(){ 
        localStorage.setItem("enderecoArmazenado1", "<a id='email1' href='mailto:press@tesla.com'>Press@tesla.com</a>");
});

//Endereço - 2
var botaoContatos2 = document.querySelector("#contatosConfirmar2"); 
botaoContatos2.addEventListener("click",function(){ 
    var endereco2 = document.querySelector("#endereço2");
    if(confirm("Você deseja confirmar as alterações no segundo endereço?")){
        if(endereco2.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var enderecoSalvo2 = endereco2.value; 
        localStorage.setItem("enderecoArmazenado2", enderecoSalvo2); 
    }
}});
 
var endereco2Salvo = localStorage.getItem("enderecoArmazenado2"); 
var inputEndereco2 = document.querySelector("#email2"); 
inputEndereco2.innerHTML = endereco2Salvo; 
    
var contatosDesfazer2 = document.querySelector("#contatosDesfazer2"); 
contatosDesfazer2.addEventListener("click",function(){ 
        localStorage.setItem("enderecoArmazenado2", "<a id='email2' href='mailto:press@tesla.com'>EUPress@tesla.com</a>");
});

//Endereço - 3

var botaoContatos3 = document.querySelector("#contatosConfirmar3"); 
botaoContatos3.addEventListener("click",function(){ 
    var endereco3 = document.querySelector("#endereço3");
    if(confirm("Você deseja confirmar as alterações no terceiro endereço?")){
        if(endereco3.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var enderecoSalvo3 = endereco3.value; 
        localStorage.setItem("enderecoArmazenado3", enderecoSalvo3); 
    }
}});
 
var endereco3Salvo = localStorage.getItem("enderecoArmazenado3"); 
var inputEndereco3 = document.querySelector("#email3"); 
inputEndereco3.innerHTML = endereco3Salvo; 
    
var contatosDesfazer3 = document.querySelector("#contatosDesfazer3"); 
contatosDesfazer3.addEventListener("click",function(){ 
        localStorage.setItem("enderecoArmazenado3", "<a id='email3' href='mailto:press@tesla.com'>APACPress@tesla.com</a>");
});

//Endereço 4

var botaoContatos4 = document.querySelector("#contatosConfirmar4"); 
botaoContatos4.addEventListener("click",function(){ 
    var endereco4 = document.querySelector("#endereço4");
    if(confirm("Você deseja confirmar as alterações no quarto endereço?")){
        if(endereco4.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var enderecoSalvo4 = endereco4.value; 
        localStorage.setItem("enderecoArmazenado4", enderecoSalvo4); 
    }
}});
 
var endereco4Salvo = localStorage.getItem("enderecoArmazenado4"); 
var inputEndereco4 = document.querySelector("#email4"); 
inputEndereco4.innerHTML = endereco4Salvo; 
    
var contatosDesfazer4 = document.querySelector("#contatosDesfazer4"); 
contatosDesfazer4.addEventListener("click",function(){ 
        localStorage.setItem("enderecoArmazenado4", "<a id='email4' href='mailto:press@tesla.com'>China-Press@tesla.com</a>");
});

//Titulos