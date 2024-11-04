"use strict";
const backTimeHours = document.querySelector('#displayHours');
const backTimeMinutes = document.querySelector('#displayMinutes');
const backTimeSeconds = document.querySelector('#displaySeconds');
const flashingDisplay = document.querySelector('#display-countdown');
const start = document.querySelector('#play');
const stopCountDown = document.querySelector('#stopTimer');
const startAgain = document.querySelector('#resume');
const resetTimer = document.querySelector("#refresh");
const imageArrows = document.querySelector("#circleArrows");
const list = document.querySelector('#myList'); //ho preso il contenitore dei pulsanti intervallo
const listCommands = document.querySelector('#row-countdown'); //ho preso il contenitore dei pulsanti di gioco
const errorBox = document.querySelector('#boxError');
const message = document.querySelector('#messageError');
const audioElement = new Audio("https://github.com/radattiluca/PROGETTO-JS-BASIC/raw/refs/heads/main/assets/audio/finishedTimer.mp3");

    
    let timeMinutes;//ho creato la variabile globale 
    let timeSeconds = 60;
    let timeSecondsPass; // variabile che assume il valore dei secondi passati
    let timeSecondsNew; // variabile che assume il valore della differenza tra i secondi iniziali e quelli rimanenti
    let timer;
    let timerId; // Variabile per tenere traccia del timer
    let isTimerActive = false; // Variabile di stato del timer


    list.addEventListener('click', function(event) {
        console.log('il timer è attivo?'+isTimerActive); // per controllare gli errori
        if(isTimerActive){
            errorBox.style.display = 'block';
            messageError.innerHTML = "<strong>ATTENTION!</strong><br> The timer is already running. <br> Press the refresh button before entering a new value";
            return;
        }else if (event.target.tagName === 'BUTTON') { 
                //se il click è avvenuto su un pulsante gli chiediamo di quale pulsante si tratta e ne prendiamo il valore 
                console.log('Hai cliccato su: ' + event.target.textContent);
                console.log('Il valore del pulsante è: ' + event.target.value);
                timeMinutes = 0; // per azzerare la variabile nel caso in cui si selezioni un pulsante prima di scegliere quello destinato al timer
                console.log('timeMinutes è'+ timeMinutes + 'prima che venga assegnato');
                timeMinutes = parseInt(event.target.value); //ci assicuriamo che sia un numero intero e lo inseriamo nella variabile timeMinutes
                console.log('timeMinutes è'+ timeMinutes + 'dopo assegnazione');
                console.log(typeof timeMinutes);
                console.log("il timer non è attivo quindi puoi scrivere il valore nel display");// per controllare gli errori
                backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes; 
            
                //qui c'era un else con all'interno un if che ho sostituito con un if else, se non dovesse funzionare qualcosa riscrivere come in precedenza
          
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
            if (isTimerActive) {
                errorBox.style.display = 'block';
                messageError.innerHTML = "<strong>ATTENTION!</strong><br> The timer is already active. You cannot start a new timer.";
                return; // Esci se il timer è attivo
            } else if (!(timeMinutes === 5 || timeMinutes === 15 || timeMinutes === 25)){
                errorBox.style.display = 'block';
                messageError.innerHTML = "<strong>ATTENTION!</strong><br> The variable is not defined. <br> You cannot start a new timer unless a time interval has been chosen first.";
                return; // Esci se il timer è attivo
            }else{
                isTimerActive = true;
                timeMinutes = timeMinutes-1;
                backTimeMinutes.textContent = timeMinutes <= 9 ? `0${timeMinutes}` : timeMinutes;
            // Inizializza il conto alla rovescia da 59
                timerSeconds(timeSeconds-1);
            };
             
        } else if(event.target.id === 'stopTimer'){
            clearTimeout(timerId); // il timer precedente viene pulito
            isTimerActive = false; 
            timeSecondsPass = parseInt(backTimeSeconds.innerText); // la variabile prende il valore scritto sul display dei secondi e viene trasformato in number
            timeSecondsNew = timeSeconds - timeSecondsPass; // la variabile perende il valore dei secondi passati prima che si fermasse il timer
            console.log(timeSecondsNew);
            console.log('stoppa timer');
            
        } else if(event.target.id === 'resume'){
            if(!(isTimerActive)){
                isTimerActive = true;
                timeSecondsPass = 0; // azzera la variabile dei secondi passati.
                console.log(timeSecondsPass);
                timerSeconds(timeSeconds - timeSecondsNew); // la funzione parte con i secondi in meno già passati
            }    
        }

    });

    resetTimer.addEventListener('click', function(){
        clearTimeout(timerId); // Cancella il timer attivo
        isTimerActive = false; // Imposta il timer come inattivo
        timeMinutes = 0; // Resetta i minuti
        timeSeconds = 60; // Resetta i secondi
        backTimeMinutes.textContent = "00"; // Ripristina il display dei minuti
        backTimeSeconds.textContent = "00"; // Ripristina il display dei secondi
    });

    document.querySelector('#close').addEventListener('click', function(){
        errorBox.style.display = 'none'; //per chiudere il box error
    });
    