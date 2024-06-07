"use strict";

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const display = document.querySelectord('#display-count');
const reset = document.querySelector('#reset');
let myCount = 0;

// capire perchè non parte lo script 

plus.addEventListener('click', () =>{
    myCount++;
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


