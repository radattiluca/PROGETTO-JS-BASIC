'use strict'

/**This function is used to reset the timer */

function reset(){
    clearTimeout(timerId); // Clear the active timer
    isTimerActive = false; // Set the timer to inactive
    timeMinutes = 0; // Reset the minutes
    timeSeconds = 60; // Reset the seconds
    backTimeMinutes.textContent = "00"; // Reset the minute display
    backTimeSeconds.textContent = "00"; // Reset the seconds display
}