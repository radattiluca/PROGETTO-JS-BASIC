"use strict";

const backTimeHours = document.querySelector('#displayHours');
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

set.addEventListener('click', function questionSecond(){

    let timeMinutes = 25;
    let timeSecond = 60;
    backTimeMinutes.textContent = "25";
    

    start.addEventListener('click', function startCount(){
    
        let timerMinutes = setInterval(function() {
       
        timeMinutes--;
        backTimeMinutes.textContent= timeMinutes;
            if (timeMinutes <= 0) {
                backTimeMinutes.innerHTML = "00";
                backTimeSeconds.innerHTML = "00";
                backTimeHours.innerHTML = "00";
                
                let flashing1 = setInterval(function() {
                backTime.style.color = "#8f8288"},1000);
                let flashing2 =  setInterval(function() {
                backTime.style.color = ""},2000);
                setTimeout(() => { clearInterval(flashing1,flashing2); location.reload()}, 6000);
                clearInterval(mytimer);
            }
        }, 60000);

        let timerSeconds = setInterval (function(){
            timeSecond--;
            backTimeSeconds.textContent= timeSecond;
            if(timeSecond <=0){
                timeSecond = 60;
                timerSeconds();
            }  
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            start.innerHTML = "Replay";
            clearInterval(timerSeconds);
            clearInterval(timerMinutes);

        });    
    });
});

seTwo.addEventListener('click', function questionSecond(){
    let timeMinutes = 5;
    let timeSecond = 60;
    backTimeMinutes.textContent = "05";

    start.addEventListener('click', function startCount(){
    
        let timerMinutes = setInterval(function() {
       
        timeMinutes--;
        backTimeMinutes.textContent= `0${timeMinutes}`;
            if (timeMinutes <= 0) {
                backTimeMinutes.innerHTML = "00";
                backTimeSeconds.innerHTML = "00";
                backTimeHours.innerHTML = "00";
                
                let flashing1 = setInterval(function() {
                backTime.style.color = "#8f8288"},1000);
                let flashing2 =  setInterval(function() {
                backTime.style.color = ""},2000);
                setTimeout(() => { clearInterval(flashing1,flashing2); location.reload()}, 6000);
                clearInterval(mytimer);
            }
        }, 60000);

        let timerSeconds = setInterval (function(){
            timeSecond--;
            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            }
            
            
            if(timeSecond <=0){
                timeSecond = 60;
                timerSeconds();
            }  
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            start.innerHTML = "Replay";
            clearInterval(timerSeconds);
            clearInterval(timerMinutes);

        });    
    });

});


azzera.addEventListener('click', function(){
    location.reload() 
});