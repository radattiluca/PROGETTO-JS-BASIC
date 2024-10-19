"use strict";
const backTimeHours = document.querySelector('#displayHours');
const backTimeMinutes = document.querySelector('#displayMinutes');
const backTimeSeconds = document.querySelector('#displaySeconds');
const flashingDisplay = document.querySelector('#display-countdown');
const start = document.querySelector('#play');
const set = document.querySelector('#buttonTwentyFive');
const seTwo = document.querySelector('#buttonFive');
const breakLong = document.querySelector('#buttonFifteen');
const stopCountDown = document.querySelector('#stopTimer');
const resetPage = document.querySelector("#refresh");
const imageArrows = document.querySelector("#circleArrows");


let finishTimer = function(){
    setTimeout(function(){
                
        let flashing1 = setInterval(function() {
        flashingDisplay.style.color = "#8f8288"},1000);
        
        let flashing2 =  setInterval(function() {
        flashingDisplay.style.color = ""},2000);

        setTimeout(() => { clearInterval(flashing1,flashing2)}, 6000);
    }, 53000);
};


//start of section interval 25 minutes
set.addEventListener('click',function setTwentyFive(){
    let timeMinutes = 24; 
    let timeSecond = 60;
    backTimeMinutes.textContent = "25";
    

    start.addEventListener('click', function startCountDown(){
        seTwo.disabled=true; //to not start the seTwo code if the user clicks on button 5 while the set code is running
        breakLong.disabled=true; //to not start the breakLong code if the user clicks on button 15 while the set code is running

        let timerSeconds = setInterval (function(){
            
            timeSecond--;
            
            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            };

            if (timeMinutes==0){
                finishTimer(); 
            };

            if(timeMinutes==24){
                    backTimeMinutes.textContent=timeMinutes;
            };

            if(timeMinutes < 0){
                clearInterval(timerSeconds);
                
            }else if(timeSecond <=0){
                timeSecond = 60;
                timeMinutes--;
                backTimeMinutes.textContent= `0${timeMinutes}`;
                timerSeconds();
            }; 
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            //to freeze the pause button from running to less than a minute and avoid the execution of finishTimer()
            if(!(timeMinutes == 0)){
                clearInterval(timerSeconds);
            }
        });    
    });
});
//finish of section interval 25 minutes

//start of section interval 5 minutes
seTwo.addEventListener('click', function setFive(){
    
    let timeMinutes = 4;
    let timeSecond = 60;
    backTimeMinutes.textContent = "05";

    start.addEventListener('click', function startCountDown(){
        set.disabled=true; //to not start the set code if the user clicks on button 25 while the seTwo code is running
        breakLong.disabled=true; //to not start the breakLong code if the user clicks on button 15 while the seTwo code is running.

        let timerSeconds = setInterval (function(){
            
            timeSecond--;
            
            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            };

            if (timeMinutes==0){
                finishTimer(); 
            };

            if(timeMinutes==4){
                    backTimeMinutes.textContent= `0${timeMinutes}`;
            };

            if(timeMinutes < 0){
                clearInterval(timerSeconds);
                backTimeMinutes.textContent= "00";
                backTimeSeconds.textContent= "00";
                
            }else if(timeSecond <=0){
                timeSecond = 60;
                timeMinutes--;
                backTimeMinutes.textContent= `0${timeMinutes}`;
                timerSeconds();
            }; 
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            //to freeze the pause button from running to less than a minute and avoid the execution of finishTimer()
            if(!(timeMinutes === 0)){ 
                clearInterval(timerSeconds);
            }
        });    
    });

});
//finish of section interval 5 minutes

//start of section break long 15 minutes
breakLong.addEventListener('click', function setFifteen(){
    

    let timeMinutes = 14;
    let timeSecond = 60;
    backTimeMinutes.textContent = "15";

    start.addEventListener('click', function startCountDown(){
        set.disabled=true; //to not start the set code if the user clicks on button 25 while the seTwo code is running
        seTwo.disabled=true; //to not start the seTwo code if the user clicks on button 5 while the seTwo code is running
        
        let timerSeconds = setInterval (function(){
            
            timeSecond--;
            
            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            };

            if (timeMinutes==0){
                finishTimer(); 
            };

            if(timeMinutes==14){
                    backTimeMinutes.textContent=timeMinutes;
            };

            if(timeMinutes < 0){
                clearInterval(timerSeconds);
                backTimeMinutes.textContent= "00";
                backTimeSeconds.textContent= "00";
                
            }else if(timeSecond <=0){
                timeSecond = 60;
                timeMinutes--;
                backTimeMinutes.textContent= `0${timeMinutes}`;
                timerSeconds();
            }; 
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            //to freeze the pause button from running to less than a minute and avoid the execution of finishTimer()
            if(!(timeMinutes === 0)){ 
                clearInterval(timerSeconds);
            }
        });    
    });

});
//finish of section break long 15'
resetPage.addEventListener('click', function(){
    location.reload();
});