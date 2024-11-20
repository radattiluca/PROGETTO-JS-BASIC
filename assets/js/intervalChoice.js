'use strict'
/**this is the function for choosing the time interval. If you have already chosen an interval and the timer is running it, an error with instructions will be returned. */

function choice(){

        if(isTimerActive){ //if the code is already running with another interval an error message appears
            errorBox.hidden = false;
            messageError.innerHTML = "<strong>ATTENTION!</strong><br> The timer is already running. <br> Press the refresh button before entering a new value";
            return;
        };

    //if the click occurred on a button we ask which button it is and take its value.
    timeMinutes = 0; //to reset the variable if you select a button before choosing the one for the timer
    timeMinutes = parseInt(event.target.value); //we make sure it's an integer and put it in the timeMinutes variable
    backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;

}