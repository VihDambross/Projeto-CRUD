//Script para alterar o sobre:
var botaoResumo1 = document.querySelector("#sobre-confirmar"); 
botaoResumo1.addEventListener("click",function(){ 
    var inputResumo1 = document.querySelector("#input-sobre");
    if(confirm("Você deseja confirmar as alterações no titulo do sobre?")){
        if(inputResumo1.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorResumo = inputResumo1.value; 
        localStorage.setItem("resumoTitulo", valorResumo); 

    }
}});
 
var tituloResumo = localStorage.getItem("resumoTitulo"); 
var titulo = document.querySelector(".titulo-sobre"); 
titulo.innerHTML = tituloResumo;  
    
var botaoDesfazer = document.querySelector("#sobre-desfazer"); 
botaoDesfazer.addEventListener("click",function(){ 
        localStorage.setItem("resumoTitulo", "Sobre");
})
//----------------------------------------------------------------------


//Script para alterar o resumo:

var botaoResumo2 = document.querySelector("#resumo-confirmar"); 
botaoResumo2.addEventListener("click",function(){ 
    var inputResumo2 = document.querySelector("#input-resumo");
    if(confirm("Você deseja confirmar as alterações no resumo?")){
        if(inputResumo2.value == ""){
            alert("Não é permitido confirmar um campo vazio.");
        }else{
        var valorResumo2 = inputResumo2.value; 
        localStorage.setItem("resumoSalvo", valorResumo2); 

    }
}});
 
var pegaResumo = localStorage.getItem("resumoSalvo"); 
var resumo = document.querySelector(".resumo"); 
resumo.innerHTML = pegaResumo;  
    
var botaoDesfazer2 = document.querySelector("#resumo-desfazer"); 
botaoDesfazer2.addEventListener("click",function(){ 
    
    localStorage.setItem("resumoSalvo", "A missão da Tesla é acelerar a transição do mundo para a energia sustentável.<br> Tesla, é uma empresa automotiva e de armazenamento de energia norte americana, que desenvolve, produz e vende automóveis elétricos de alto desempenho, componentes para motores e transmissões para veículos elétricos e produtos à base de baterias.</p>");   

})

