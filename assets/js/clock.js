"use strict";

function displayClock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector("#display-clock").textContent = time; 
};

const createClock = setInterval(displayClock, 1000); 