"use strict";

const display = document.querySelector('#display-count'); // Seleziona l'elemento di visualizzazione
let myCount = 0; // Inizializza il contatore

document.addEventListener('click', function (event) {
    const action = event.target.dataset.action; // Ottiene l'azione dal dataset

    // Usa switch per gestire le azioni
    switch (action) {
        case 'add':
            myCount++; // Incrementa il contatore
            break;
        case 'sub':
            myCount--; // Decrementa il contatore
            break;
        case 'reset':
            myCount = 0; // Resetta il contatore
            break;
        default:
            console.log('Azione non riconosciuta'); // Gestione di casi non previsti
            return; // Esci dalla funzione se non ci sono azioni valide
    }

    display.textContent = myCount; // Aggiorna il display
});