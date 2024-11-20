'use strict'

    /** This function allows us to stop the timer and take the amount of seconds passed to be able to pass them to the resume() function */

    function stop(){

        clearTimeout(timerId); // the previous timer is cleared
        isTimerActive = false; 
        timeSecondsPass = parseInt(backTimeSeconds.innerText); // the variable takes the value of the seconds spent on the display and transformed into number
        timeSecondsNew = timeSeconds - timeSecondsPass; // the variable takes the value of the difference between the initial seconds and the elapsed ones
    }
   