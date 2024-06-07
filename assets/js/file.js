"use strict";
const divContenitoreClock = document.querySelector("#row-clock");
const paragrafoDisplayClock = document.createElement("p");
paragrafoDisplayClock.className = "display";
paragrafoDisplayClock.id = "hours";
paragrafoDisplayClock.innerHTML = '0';
divContenitoreClock.appendChild(paragrafoDisplayClock);

const divContenitoreCounter = document.querySelector("#row-counter");
const paragrafoDisplayCounter = document.createElement("p");
paragrafoDisplayCounter.className = "display";
paragrafoDisplayCounter.id = "display-count";
paragrafoDisplayCounter.innerHTML = '0';
divContenitoreCounter.appendChild(paragrafoDisplayCounter);