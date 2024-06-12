"use strict";

const backTime = document.querySelector('#display-countdown');
const start = document.querySelector('#avvia');
const set = document.querySelector('#imposta');
const stopCountDown = document.querySelector('#stopTimer');

backTime.textContent="0";

set.addEventListener('click', function questionSecond(){
    let timeDown = prompt ('Inserisci un intervallo di tempo in secondi es.120');
    if(parseInt(timeDown)){ 
        backTime.textContent = timeDown;
    }else{
        alert('Inserisci un intervallo valido');
        backTime.innerHTML = "Error";
    };

    start.addEventListener('click', function startCount(){
    
        let mytimer = setInterval(function() {
       
        timeDown--;
        
        backTime.innerHTML = timeDown;
            if (timeDown <= 0) {
              backTime.innerHTML = "Time Out!";
              clearInterval(mytimer);
            }
        },1000);
        stopCountDown.addEventListener('click', function(){
            //ripristinare il pulsante pausa perchè funzionaaaa!
            clearInterval(mytimer);
        });    
    });
});

