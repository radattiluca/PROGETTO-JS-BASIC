"use strict";

const display = document.querySelector('#display-count');
let myCount = 0; // Initialize the counter

// Add the event listener to the parent container
document.querySelector('#row-counter').addEventListener('click', function (event) {
    const action = event.target.dataset.action; // We get the action from the dataset

// We use switches to handle actions
    switch (action) {
        case 'add':
            myCount++; // Increment the counter
            break;
        case 'sub':
            myCount--; // Decrement the counter
            break;
        case 'zero':
            myCount = 0; // Reset the counter
            break;
        default:
            return; // Exits if there are no valid actions
    }

    display.textContent = myCount; // Update the display
});
