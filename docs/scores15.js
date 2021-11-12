var score1 = 0, score2 = 0;

let scoreUsAux = document.createElement("h2");
let scoreTheyAux = document.createElement("h2");

let scoreUs = document.getElementsByClassName("scoreUs");
let scoreThey = document.getElementsByClassName("scoreThey");

scoreUsAux.classList.add("scoreUs");
scoreTheyAux.classList.add("scoreThey");

function reset(){

    score1 = 0;
    score2 = 0;

    scoreUsAux.textContent = score1;
    scoreTheyAux.textContent = score2;
    
    scoreUs[0].parentNode.replaceChild(scoreUsAux, scoreUs[0]);
    scoreThey[0].parentNode.replaceChild(scoreTheyAux, scoreThey[0]);
    
}

function add(team1){
    if(team1  && score1 < 15){
        score1++;
        scoreUsAux.textContent = score1;
        scoreUs[0].parentNode.replaceChild(scoreUsAux, scoreUs[0]);
        if(score1 == 15){
            alert("Ganamos nosotros!");
        }
    }else if(!team1 && score2 < 15){
        score2++;
        scoreTheyAux.textContent = score2;
        scoreThey[0].parentNode.replaceChild(scoreTheyAux, scoreThey[0]);
        if(score2 == 15){
            alert("Ganan ellos!");
        }
    }else if(score2 == 15 || score1 == 15){
        alert("La partida ha terminado!");
    }
}

function substract(team1){
    if(team1 && score1 > 0){
        score1--;
        scoreUsAux.textContent = score1;
        scoreUs[0].parentNode.replaceChild(scoreUsAux, scoreUs[0]);
        
    }else if(score2 > 0){
        score2--;
        scoreTheyAux.textContent = score2;
        scoreThey[0].parentNode.replaceChild(scoreTheyAux, scoreThey[0]);
    }else{
        alert("No puede serguir restando!");
    }
}