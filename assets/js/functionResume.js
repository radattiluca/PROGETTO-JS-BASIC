'use strict'

/**This function is used to restart the timer.
We call the timerSeconds() function and insert as a parameter the difference between the initial and past seconds */

function resume(){
    if(!(isTimerActive)){
        if(timeMinutes == undefined){ //control to not start the key function before a value is defined.
            return;
        }
        isTimerActive = true;
        timeSecondsPass = 0; // resets the past seconds variable.
        timerSeconds(timeSeconds - timeSecondsNew); // the function starts with the fewer seconds already passed
        start.style.backgroundColor = "#d5303e"; //turns the button back on
        stopCountDown.style.backgroundColor = "#d5303e"; //turns the button back on
        resetTimer.style.backgroundColor = "#d5303e"; //turns the button back on 
    }  
}