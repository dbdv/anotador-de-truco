

var score1 = 0, score2 = 0;

let outUsAux = document.createElement("h2");
let outTheyAux = document.createElement("h2");
let inUsAux = document.createElement("h2");
let inTheyAux = document.createElement("h2");

let outUs = document.getElementsByClassName("outUs");
let outThey = document.getElementsByClassName("outThey");
let inUs = document.getElementsByClassName("inUs");
let inThey = document.getElementsByClassName("inThey");

outUsAux.classList.add("outUs");
outTheyAux.classList.add("outThey");
inUsAux.classList.add("inUs");
inTheyAux.classList.add("inThey");

function reset(){

    score1 = 0;
    score2 = 0;

    outUsAux.textContent = score1;
    outTheyAux.textContent = score2;
    inUsAux.textContent = score1;
    inTheyAux.textContent = score2;
    
    outUs[0].parentNode.replaceChild(outUsAux, outUs[0]);
    outThey[0].parentNode.replaceChild(outTheyAux, outThey[0]);
    inUs[0].parentNode.replaceChild(inUsAux, inUs[0]);
    inThey[0].parentNode.replaceChild(inTheyAux, inThey[0]);
    
}
