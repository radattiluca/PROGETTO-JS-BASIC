"use strict";

const backTimeMinutes = document.querySelector('#displayMinutes');
const backTimeSeconds = document.querySelector('#displaySeconds');
const start = document.querySelector('#avvia');
const set = document.querySelector('#bottonTwentyFive');
const seTwo = document.querySelector('#bottonFive');
const stopCountDown = document.querySelector('#stopTimer');
const azzera = document.querySelector("#refresh");
const imageArrows = document.querySelector("#circleArrows")

//backTime.textContent="0";
//mettere un eventprevent per bloccare l'esecuzione del ciclo di 5 min se si preme insieme a quello di 25
/*
set.addEventListener('click', function questionSecond(){

    let timeDown = 1500;
    backTimeMinutes = "25";
    /*let timeDown = 25;
    backTime.textContent = timeDown;

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
            start.innerHTML = "Replay";
            clearInterval(mytimer);
        }); */   
   // });
//});

seTwo.addEventListener('click', function questionSecond(){
    let timeDown = 5;
    backTime.textContent = timeDown;

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
            start.innerHTML = "Replay";
            clearInterval(mytimer);
        });    
    });
});


azzera.addEventListener('click', function(){
    location.reload() 
});