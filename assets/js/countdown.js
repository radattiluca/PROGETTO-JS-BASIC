"use strict";
const backTimeHours = document.querySelector('#displayHours');
const backTimeMinutes = document.querySelector('#displayMinutes');
const backTimeSeconds = document.querySelector('#displaySeconds');
const flashingDisplay = document.querySelector('#display-countdown');
const start = document.querySelector('#play');
const stopCountDown = document.querySelector('#stopTimer');
const startAgain = document.querySelector('#resume');
const resetTimer = document.querySelector("#refresh");
const listCommands = document.querySelector('#commandsGrid'); //container for play, stop and resume buttons
const errorBox = document.querySelector('#boxError'); // error message container
const message = document.querySelector('#messageError'); // message container
const audioElement = new Audio("https://github.com/radattiluca/PROGETTO-JS-BASIC/raw/refs/heads/main/assets/audio/finishedTimer.mp3"); // sound finish timer

let timeMinutes;
let timeSeconds = 60;
let timeSecondsPass; // variable that takes the value of the seconds passed
let timeSecondsNew; // variable that takes the value of the difference between the initial and remaining seconds
let timer;
let timerId; // Variable to track timer
let isTimerActive = false; // Timer state variable
errorBox.hidden = true; //we set the error div to invisible


    if(listCommands!= null){ //the code is executed only if listCommands exists
        
        listCommands.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') { 
            
                if(event.target.id === 'buttonTwentyFive' || event.target.id === 'buttonFive' || event.target.id === 'buttonFifteen') { 
                    
                        if(isTimerActive){ //if the code is already running with another interval an error message appears
                            errorBox.hidden = false;
                            messageError.innerHTML = "<strong>ATTENTION!</strong><br> The timer is already running. <br> Press the refresh button before entering a new value";
                            return;
                        }
                    
                    //if the click occurred on a button we ask which button it is and take its value.
                    timeMinutes = 0; //to reset the variable if you select a button before choosing the one for the timer
                    timeMinutes = parseInt(event.target.value); //we make sure it's an integer and put it in the timeMinutes variable
                    backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;
                    
                    
                };

                if(event.target.id === 'play'){
                    play();    
                };

                if(event.target.id === 'stopTimer'){
                    stop();
                    
                };
                
                if(event.target.id === 'resume'){
                    resume();
                };
                
                if(event.target.id === 'refresh'){
                    reset();
                };
                
                if(event.target.id === 'close'){
                    //to close the error box on the user's click on the x
                    errorBox.hidden = true; 
                        
                    };
                
            }else{
                return;
            }

            
            
        });
        
    }

    
        