"use strict";

const showClock = document.querySelector("#display-clock");
const display = document.querySelector('#display-count');
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


let myCount = 0; // Initialize the counter
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
                // Increment the counter
                if(event.target.id === 'plus'){
                    myCount++; 
                    display.textContent = myCount; // Update the display
                };
                // Reset the counter
                if(event.target.id === 'reset'){
                    myCount = 0; 
                    display.textContent = myCount; // Update the display
                };
                // Decrement the counter
                if(event.target.id === 'minus'){
                    myCount--; 
                    display.textContent = myCount; // Update the display
                };
            
                if(event.target.id === 'buttonTwentyFive' || event.target.id === 'buttonFive' || event.target.id === 'buttonFifteen') { 
                    choice();
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