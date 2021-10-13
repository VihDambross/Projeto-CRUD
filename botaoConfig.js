//Ao clickar o display muda de none para block
function mostra(id){
    if(document.getElementById(id).style.display == "none"){
        document.getElementById(id).style.display = "block";
    }else{
        document.getElementById(id).style.display = "none"
    }
}


