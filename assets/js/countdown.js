"use strict";

const backTime = document.querySelector('#display-countdown');
const start = document.querySelector('#avvia');
const set = document.querySelector('#imposta');
const stopCountDown = document.querySelector('#stopTimer');
const azzera = document.querySelector("#refresh");
const imageArrows = document.querySelector("#circleArrows")

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
                
                let flashing1 = setInterval(function() {
                backTime.style.color = "#8f8288"},1000);
                let flashing2 =  setInterval(function() {
                backTime.style.color = ""},2000);
                setTimeout(() => { clearInterval(flashing1,flashing2); location.reload()}, 6000);
                clearInterval(mytimer);
            }
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            start.innerHTML = "Riprendi";
            clearInterval(mytimer);
        });    
    });
});

azzera.addEventListener('click', function(){
    location.reload() 
});
