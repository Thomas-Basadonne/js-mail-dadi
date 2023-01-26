// creo 2 generatori di numeri random da 1 a 6

let num = Math.round(Math.random() * 5) + 1;
console.log(num);

let numPc = Math.round(Math.random() * 5) + 1;
console.log(numPc);

var element = document.getElementById("randomBtn");

element.addEventListener("click",

    function(){

        let num = Math.round(Math.random() * 5) + 1;
        console.log(num);

        let numPc = Math.round(Math.random() * 5) + 1;
        console.log(numPc);
    }

);
// metto condizioni di vittoria e di pareggio
// faccio attivare il gioco con un bottone