'use strict';

/**This is the main function of the timer.Thanks to a recursive call it allows us to decrease the count. When the counter reaches 0, if the minutes are also equal to 0 it will execute a .play and start a setInterval which will make the timer flash, otherwise it will call the function to restart the counting of seconds. */

function timerSeconds (count) {
    // Show the current number
    backTimeSeconds.textContent = count <= 9 ? `0${count}` : count;

    // If the count is greater than 0, continue the countdown
    if (count > 0) {
        timerId = setTimeout(function(){
            timerSeconds(count - 1); // Recursive call with the number decremented
        }, 1000);

    } else{
        // When the seconds count reaches 0
        if(timeMinutes != 0){
            setTimeout(function(){
                timeMinutes--; //time minutes is decremented
                backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;
                clearTimeout(timerId); // delete the previous timer
                isTimerActive = false; // Set the timer state to inactive
                timerSeconds(timeSeconds-1); //initialize another one
                isTimerActive = true;
            },1000); 
        } else{ //if count is less than 0
            clearTimeout(timerId); //clears the active timer
            isTimerActive = false; 
            audioElement.play(); //plays the end audio
            // flashes the numbers on the display for 5 seconds
            let flashing1 = setInterval(function() {
                flashingDisplay.style.color = "#8f8288"},1000);
            let flashing2 =  setInterval(function() {
                flashingDisplay.style.color = ""},2000);
            // cleans the setInterval of the flashes
            setTimeout(() => {
                clearInterval(flashing1,flashing2)
            }, 5000);
       
        }
    }
}