"use strict";

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const display = document.querySelector('#display-count');
const reset = document.querySelector('#reset');
let myCount = 0;


//increment function
plus.addEventListener('click', () =>{
    myCount++; 
    display.textContent = myCount;
    
});

//decrease function
minus.addEventListener('click', () =>{

    myCount--;
    display.textContent = myCount;
    
    
});

//reset function
reset.addEventListener('click', () =>{
    myCount = 0;
    display.textContent = 0;
});


