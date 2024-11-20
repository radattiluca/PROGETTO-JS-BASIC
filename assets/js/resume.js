'use strict'

/**This function is used to restart the timer.
We call the timerSeconds() function and insert as a parameter the difference between the initial and past seconds */

function resume(){
    if(!(isTimerActive)){
        isTimerActive = true;
        timeSecondsPass = 0; // resets the past seconds variable.
        timerSeconds(timeSeconds - timeSecondsNew); // the function starts with the fewer seconds already passed
    }  
}