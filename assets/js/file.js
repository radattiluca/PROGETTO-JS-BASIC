"use strict";
const divContenitoreClock = document.querySelector("#row-clock");
const paragrafoDisplayClock = document.createElement("p");
paragrafoDisplayClock.className = "display";
paragrafoDisplayClock.id = "hours";
paragrafoDisplayClock.innerHTML = '0';
divContenitoreClock.appendChild(paragrafoDisplayClock);