// creo una lista di mail
let email = ["paolorossi@gmail.com", "marcoverdi@icloud.com", "ileniabianchi@libero.it", "giuliaesposito@gmail.com", "thommybasa@gmail.com"];

// chiedo all'utente di inserire la sua mail con un imput 

// un bottone per il controllo
var element = document.getElementById("btnEmail");
element.addEventListener("click",
    function(){
        var emailUser = document.getElementById("inputEmail").value;
        console.log(emailUser);
       
        //se la mail è presente nell'arry compare scritta "puoi accedere"
            if (email.includes(emailUser)){
                console.log("true");
                document.getElementById("result").innerHTML ="Email accettata!";
            } else { // se non è presente comapre "non puoi accedere"
                console.log("false");
                document.getElementById("result").innerHTML = "Email rifiutata!";
            }
    }
);
// bunus aggiungere email
var element = document.getElementById("btnAdd");
element.addEventListener("click",
    function () {
        var emailUser = document.getElementById("inputEmail").value;
        email.push(emailUser);
    }
);