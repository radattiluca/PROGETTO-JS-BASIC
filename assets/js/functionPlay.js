'use strict'

/** Questa è una funzione che permette il funzionamento del tasto play. If the interval has not been chosen or you are trying to start another timer at the same time as another, an error message will return. Otherwise, initialize the timeMinutes and timeSeconds values ​​and start the timerSeconds function.
 */

function play(){
        if (isTimerActive) {
            errorBox.hidden = false;
            messageError.innerHTML = "<strong>ATTENTION!</strong><br> The timer is already active. You cannot start a new timer.";
            return; // Exit if the timer is active
        }

        if (!(timeMinutes === 5 || timeMinutes === 15 || timeMinutes === 25)){
            errorBox.hidden = false;
            messageError.innerHTML = "<strong>ATTENTION!</strong><br> No interval has been chosen.<br> It is not possible to start the timer if you have not previously chosen a time interval.";
            return; // Exit if you have not chosen the interval
        }

    isTimerActive = true;
    timeMinutes = timeMinutes-1;
    backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;
    // Initializes the countdown from 59'
    timerSeconds(timeSeconds-1);
}