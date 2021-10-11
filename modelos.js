const imgs = document.getElementById("image");
const img = document.querySelectorAll("#image img")

let idx = 0;

function carrossel(){
    idx++;
    if(idx > img.length -1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx *615}px`;
}


setInterval(carrossel, 1800);