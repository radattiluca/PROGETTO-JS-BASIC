"use strict";
const backTimeHours = document.querySelector('#displayHours');
const backTimeMinutes = document.querySelector('#displayMinutes');
const backTimeSeconds = document.querySelector('#displaySeconds');
const flashingDisplay = document.querySelector('#display-countdown');
const start = document.querySelector('#play');
const stopCountDown = document.querySelector('#stopTimer');
const startAgain = document.querySelector('#resume');
const resetTimer = document.querySelector("#refresh");
const listCommands = document.querySelector('#column'); //container for play, stop and resume buttons
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


    listCommands.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') { 
        
            if(event.target.id === 'buttonTwentyFive' || event.target.id === 'buttonFive' || event.target.id === 'buttonFifteen') { 
                if(isTimerActive){ //if the code is already running with another interval an error message appears
                    errorBox.hidden = false;
                    messageError.innerHTML = "<strong>ATTENTION!</strong><br> The timer is already running. <br> Press the refresh button before entering a new value";
                    return;
                }else{
                    //if the click occurred on a button we ask which button it is and take its value.
                    timeMinutes = 0; //to reset the variable if you select a button before choosing the one for the timer
                    timeMinutes = parseInt(event.target.value); //we make sure it's an integer and put it in the timeMinutes variable
                    backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;
                };
                 
            } else if(event.target.id === 'play'){
                if (isTimerActive) {
                    errorBox.hidden = false;
                    messageError.innerHTML = "<strong>ATTENTION!</strong><br> The timer is already active. You cannot start a new timer.";
                    return; // Exit if the timer is active
                } else if (!(timeMinutes === 5 || timeMinutes === 15 || timeMinutes === 25)){
                    errorBox.hidden = false;
                    messageError.innerHTML = "<strong>ATTENTION!</strong><br> No interval has been chosen.<br> It is not possible to start the timer if you have not previously chosen a time interval.";
                    return; // Exit if you have not chosen the interval
                }else{
                    isTimerActive = true;
                    timeMinutes = timeMinutes-1;
                    backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;
                    // Initializes the countdown from 59'
                    timerSeconds(timeSeconds-1);
                };
                
            } else if(event.target.id === 'stopTimer'){
                clearTimeout(timerId); // the previous timer is cleared
                isTimerActive = false; 
                timeSecondsPass = parseInt(backTimeSeconds.innerText); // the variable takes the value of the seconds spent on the display and transformed into number
                timeSecondsNew = timeSeconds - timeSecondsPass; // the variable takes the value of the difference between the initial seconds and the elapsed ones
                
            } else if(event.target.id === 'resume'){
                if(!(isTimerActive)){
                    isTimerActive = true;
                    timeSecondsPass = 0; // resets the past seconds variable.
                    timerSeconds(timeSeconds - timeSecondsNew); // the function starts with the fewer seconds already passed
                };   
            } else if(event.target.id === 'refresh'){
                clearTimeout(timerId); // Clear the active timer
                isTimerActive = false; // Set the timer to inactive
                timeMinutes = 0; // Reset the minutes
                timeSeconds = 60; // Reset the seconds
                backTimeMinutes.textContent = "00"; // Reset the minute display
                backTimeSeconds.textContent = "00"; // Reset the seconds display
            } else if(event.target.id === 'close'){
                    errorBox.hidden = true; //to close the error box on the user's click on the x
                    
                };
               
        }else{
            return;
        }

        
        
    });
    


 
    