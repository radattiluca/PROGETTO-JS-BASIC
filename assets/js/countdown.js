"use strict";
const backTimeHours = document.querySelector('#displayHours');
const backTimeMinutes = document.querySelector('#displayMinutes');
const backTimeSeconds = document.querySelector('#displaySeconds');
const flashingDisplay = document.querySelector('#display-countdown');
const start = document.querySelector('#play');
const set = document.querySelector('#buttonTwentyFive');
const seTwo = document.querySelector('#buttonFive');
const stopCountDown = document.querySelector('#stopTimer');
const resetPage = document.querySelector("#refresh");
const imageArrows = document.querySelector("#circleArrows");

/*let finishTimer = function(){
    setTimeout(function(){
                
        let flashing1 = setInterval(function() {
        flashingDisplay.style.color = "#8f8288"},1000);
        
        let flashing2 =  setInterval(function() {
        flashingDisplay.style.color = ""},2000);
        setTimeout(() => { clearInterval(flashing1,flashing2); location.reload()}, 6000);
    }, 54000);
};*/


//mettere un eventprevent per bloccare l'esecuzione del ciclo di 5 min se si preme insieme a quello di 25

//start of section interval 25 minutes
set.addEventListener('click', function questionSecond(){

    let timeMinutes = 24; 
    let timeSecond = 60;
    backTimeMinutes.textContent = "25";
    

    start.addEventListener('click', function startCount(){
        
        backTimeMinutes.textContent = timeMinutes; 

        let timerMinutes = setInterval(function() {
       
        timeMinutes--;

            if(timeMinutes <=9){
                backTimeMinutes.textContent= `0${timeMinutes}`; 
            }else{
                backTimeMinutes.textContent= timeMinutes;
            }
            
        }, 60000);

        let timerSeconds = setInterval (function(){
            timeSecond--;
            backTimeSeconds.textContent= timeSecond;

            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            }

            if(timeMinutes < 0){ //quando il timer dei minuti va a -1 il codice blocca il countdown e sovrascrive il numero -1 con la stringa 00
                backTimeMinutes.textContent= "00";
                clearInterval(timerSeconds);
                clearInterval(timeMinutes);
            }else if(timeSecond <=0){ // 
                timeSecond = 60;
                timerSeconds();
            }  
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            if(!(timeMinutes === 0)){
                clearInterval(timerSeconds);
                clearInterval(timerMinutes);
            }
        });    
    });
});
//finish of section interval 25 minutes

//start of section interval 5 minutes
seTwo.addEventListener('click', function questionSecond(){
    let timeMinutes = 1;
    let timeSecond = 60;
    backTimeMinutes.textContent = "05";

    start.addEventListener('click', function startCount(){
        
        backTimeMinutes.textContent = `0${timeMinutes}`;

        let timerMinutes = setInterval(function() {
       
            timeMinutes--;
            backTimeMinutes.textContent= `0${timeMinutes}`;
            }, 60000);

        let timerSeconds = setInterval (function(){
            
            timeSecond--;
            
            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            }
            
            if(timeMinutes < 0){
                backTimeMinutes.textContent= "00";
                clearInterval(timerSeconds);
                clearInterval(timeMinutes);
            }else if(timeSecond <=0){
                timeSecond = 60;
                timerSeconds();
            }  
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            if(!(timeMinutes === 0)){
                clearInterval(timerSeconds);
                clearInterval(timerMinutes);
            }
        });    
    });

});
//finish of section interval 5 minutes

resetPage.addEventListener('click', function(){
    location.reload() 
});