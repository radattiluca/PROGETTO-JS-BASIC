'use strict';

function timerSeconds (count) {
    // Mostra il numero corrente
    backTimeSeconds.textContent = count <= 9 ? `0${count}` : count;

    // Se il conteggio è maggiore di 0, continua il conto alla rovescia
    if (count > 0) {
        timerId = setTimeout(() => {
            timerSeconds(count - 1); // Chiamata ricorsiva con il numero decrementato
        }, 1000);// Aspetta 1 secondo (1000 millisecondi)

    } else if (count == 0){
        // Quando il conteggio dei secondi arriva a 0
        if(timeMinutes != 0){
            setTimeout(()=>{
                timeMinutes--; //time minutes si decrementa 
                backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;
                clearTimeout(timerId); // cancello il timer precedente
                isTimerActive = false; // Imposta lo stato del timer come inattivo
                timerSeconds(timeSeconds-1); //ne inizializzo un altro
                isTimerActive = true;
            },1000); 
        } else{
            clearTimeout(timerId);
            isTimerActive = false;
            audioElement.play();
            
            let flashing1 = setInterval(function() {
                flashingDisplay.style.color = "#8f8288"},1000);
            let flashing2 =  setInterval(function() {
                flashingDisplay.style.color = ""},2000);
            
            setTimeout(() => {
                clearInterval(flashing1,flashing2)
            }, 5000);
       
        }
    }
}