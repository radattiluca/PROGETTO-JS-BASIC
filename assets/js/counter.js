"use strict";

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const display = document.querySelector('#display-count');
const reset = document.querySelector('#reset');
let myCount = 0;

// capire perchè non parte lo script 

plus.addEventListener('click', () =>{
    myCount-=5; //per il pulsante + 5 e - 5
    display.textContent = myCount;
    
});

minus.addEventListener('click', () =>{
    if(myCount == 0){
        e.preventDefault( );
    } else{
        myCount--;
        display.textContent = myCount;
    }
    
    
});

reset.addEventListener('click', () =>{
    myCount = 0;
    display.textContent = 0;
});


