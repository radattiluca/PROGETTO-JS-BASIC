"use strict";
const backTimeHours = document.querySelector('#displayHours');
const backTimeMinutes = document.querySelector('#displayMinutes');
const backTimeSeconds = document.querySelector('#displaySeconds');
const flashingDisplay = document.querySelector('#display-countdown');
const start = document.querySelector('#play');
const set = document.querySelector('#buttonTwentyFive');
const seTwo = document.querySelector('#buttonFive');
const breakLong = document.querySelector('#buttonFifteen');
const stopCountDown = document.querySelector('#stopTimer');
const resetPage = document.querySelector("#refresh");
const imageArrows = document.querySelector("#circleArrows");
const audioElement = new Audio("https://github.com/radattiluca/PROGETTO-JS-BASIC/raw/refs/heads/main/assets/audio/finishedTimer.mp3");

    const list = document.querySelector('#myList'); //ho preso il contenitore dei pulsanti intervallo
    const listCommands = document.querySelector('#row-countdown'); //ho preso il contenitore dei pulsanti di gioco
    let timeMinutes;//ho creato la variabile globale 
    let timeSeconds = 60;
    let timer;
    let timerId; // Variabile per tenere traccia del timer
    let isTimerActive = false; // Variabile di stato del timer

    /*function startTimer() {
        if (isTimerActive) {
            console.log("Il timer è già attivo."); // Controllo se il timer è già attivo
            return; // Non avviare un nuovo timer
        }
        clearTimeout(timerId); // Cancella eventuali timer precedenti
        isTimerActive = true; // Imposta lo stato del timer come attivo
    };*/
    list.addEventListener('click', function(event) {
        console.log('il timer è attivo?'+isTimerActive); // per controllare gli errori
        if(isTimerActive){
            console.log("il timer è attivo quindi non puoi scrivere il valore nel display");// per controllare gli errori
            return;
        }else{
            
            if (event.target.tagName === 'BUTTON') { 
                //se il click è avvenuto su un pulsante gli chiediamo di quale pulsante si tratta e ne prendiamo il valore 
                console.log('Hai cliccato su: ' + event.target.textContent);
                console.log('Il valore del pulsante è: ' + event.target.value);
                timeMinutes = 0; // per azzerare la variabile nel caso in cui si selezioni un pulsante prima di scegliere quello destinato al timer
                console.log('timeMinutes è'+ timeMinutes + 'prima che venga assegnato');
                timeMinutes = parseInt(event.target.value); //ci assicuriamo che sia un numero intero e lo inseriamo nella variabile timeMinutes
                console.log('timeMinutes è'+ timeMinutes + 'dopo assegnazione');
                console.log("il timer non è attivo quindi puoi scrivere il valore nel display");// per controllare gli errori
                backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes; }
          
        }; 
    
    });

    listCommands.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') { //facciamo la stessa cosa per i pulsanti di gioco
            //alert('Hai cliccato su: ' + event.target.textContent);
            //alert('L"id del pulsante è: ' + event.target.id);
            //let myId = event.target.id;
            //console.log(myId);
        }
           
        if(event.target.id === 'play'){
            isTimerActive = true;
            timeMinutes = timeMinutes-1;
            backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;
            function timerSeconds(count) {
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
                    }
                }
            }
            
            // Inizializza il conto alla rovescia da 10
                timerSeconds(timeSeconds-1);


        } else if(event.target.id === 'stopTimer'){
            console.log('stoppa timer');
            
        }

    });

    

//start of section interval 25 minutes
    /*start.addEventListener('click', function startCountDown(){

        let timerSeconds = setTimeout (function(){
            let timeSecond= 60;
            timeSecond--;
            
            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            };

            if (timeMinutes==0 && timeSecond == 5){
                finishTimer();
            };

            if(timeMinutes==24){
                    backTimeMinutes.textContent=timeMinutes;
            }else if(timeMinutes <= 9){
                backTimeMinutes.textContent=`0${timeMinutes}`;
                
            };

            if(timeMinutes < 0){
                clearInterval(timerSeconds);
                backTimeMinutes.textContent= "00";
                backTimeSeconds.textContent= "00";
                
            }else if(timeSecond <=0){
                timeSecond = 60;
                timeMinutes--;
                backTimeMinutes.textContent=timeMinutes;
                timerSeconds();
            }; 
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            //to freeze the pause button from running to less than a minute and avoid the execution of finishTimer()
            if(!(timeMinutes == 0)){
                clearInterval(timerSeconds);
            }
        });    
    });*/

/*let finishTimer = function(){
                
        let flashing1 = setInterval(function() {
        flashingDisplay.style.color = "#8f8288"},1000);
        
        let flashing2 =  setInterval(function() {
        flashingDisplay.style.color = ""},2000);

        setTimeout(() => { 
            audioElement.play();
            clearInterval(flashing1,flashing2)}, 6000);
};*/

/*
//finish of section interval 25 minutes

//start of section interval 5 minutes
seTwo.addEventListener('click', function setFive(){
    let timeMinutes = 4;
    let timeSecond = 60;
    backTimeMinutes.textContent = "05";

    start.addEventListener('click', function startCountDown(){
        set.disabled=true; //to not start the set code if the user clicks on button 25 while the seTwo code is running
        breakLong.disabled=true; //to not start the breakLong code if the user clicks on button 15 while the seTwo code is running.

        let timerSeconds = setInterval (function(){
            
            timeSecond--;
            
            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            };

            if (timeMinutes==0 && timeSecond == 5){
                finishTimer(); 
            };

            if(timeMinutes==4){
                    backTimeMinutes.textContent= `0${timeMinutes}`;
            };

            if(timeMinutes < 0){
                clearInterval(timerSeconds);
                backTimeMinutes.textContent= "00";
                backTimeSeconds.textContent= "00";
                
            }else if(timeSecond <=0){
                timeSecond = 60;
                timeMinutes--;
                backTimeMinutes.textContent= `0${timeMinutes}`;
                timerSeconds();
            }; 
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            //to freeze the pause button from running to less than a minute and avoid the execution of finishTimer()
            if(!(timeMinutes === 0)){ 
                clearInterval(timerSeconds);
            }
        });    
    });

});
//finish of section interval 5 minutes

//start of section break long 15 minutes
breakLong.addEventListener('click', function setFifteen(){
    

    let timeMinutes = 14;
    let timeSecond = 60;
    backTimeMinutes.textContent = "15";

    start.addEventListener('click', function startCountDown(){
        set.disabled=true; //to not start the set code if the user clicks on button 25 while the seTwo code is running
        seTwo.disabled=true; //to not start the seTwo code if the user clicks on button 5 while the seTwo code is running
        
        let timerSeconds = setInterval (function(){
            
            timeSecond--;
            
            if(timeSecond <=9){
                backTimeSeconds.textContent= `0${timeSecond}`; 
            }else{
                backTimeSeconds.textContent= timeSecond;
            };

            if (timeMinutes==0 && timeSecond == 5){
                finishTimer(); 
            };

            if(timeMinutes==14){
                    backTimeMinutes.textContent=timeMinutes;
            }else if(timeMinutes <= 9){
                    backTimeMinutes.textContent=`0${timeMinutes}`;
            };

            if(timeMinutes < 0){
                clearInterval(timerSeconds);
                backTimeMinutes.textContent= "00";
                backTimeSeconds.textContent= "00";
                
            }else if(timeSecond <=0){
                timeSecond = 60;
                timeMinutes--;
                backTimeMinutes.textContent=timeMinutes;
                timerSeconds();
            }; 
        }, 1000);
        
        stopCountDown.addEventListener('click', function(){
            //to freeze the pause button from running to less than a minute and avoid the execution of finishTimer()
            if(!(timeMinutes === 0)){ 
                clearInterval(timerSeconds);
            }
        });    
    });

});
//finish of section break long 15'
resetPage.addEventListener('click', function(){
    location.reload();
});*/