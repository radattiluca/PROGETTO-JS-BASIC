"use strict";
//creato contenitore clock con paragrafo all'interno del nodo row-clock
const divContenitoreClock = document.querySelector("#row-clock");
const paragrafoDisplayClock = document.createElement("p");
paragrafoDisplayClock.className = "display";
paragrafoDisplayClock.id = "display-clock";
paragrafoDisplayClock.innerHTML = '0';
divContenitoreClock.appendChild(paragrafoDisplayClock);


//creato contenitore counter con paragrafo all'interno del nodo row-counter
const divContenitoreCounter = document.querySelector("#row-counter");
const paragrafoDisplayCounter = document.createElement("p");
paragrafoDisplayCounter.className = "display";
paragrafoDisplayCounter.id = "display-count";
paragrafoDisplayCounter.innerHTML = '0';
divContenitoreCounter.prepend(paragrafoDisplayCounter);
//creato pulsanti all'interno del nodo row-counter
const pulsantePiu = document.createElement("button");
const pulsanteReset = document.createElement("button");
const pulsanteMeno = document.createElement("button");
pulsantePiu.id = "plus";
pulsantePiu.className = "styleBottonPlayer";
pulsantePiu.innerHTML = "+";
pulsanteReset.id = "reset";
pulsanteReset.className = "styleBottonPlayer";
pulsanteReset.innerHTML = "Reset";
pulsanteMeno.id = "minus";
pulsanteMeno.className = "styleBottonPlayer";
pulsanteMeno.innerHTML = "-";



//creato contenitore countdown con paragrafo all'interno del nodo row-countdown
const divContenitoreCountdown = document.querySelector("#row-countdown");
const paragrafoDisplayCountdown = document.createElement("div");
const containerHours = document.createElement('div');
const containerMinutes = document.createElement('div');
const containerSeconds = document.createElement('div');
const paragrafoTwoPoints = document.createElement('span');
const twoTwoPoints = paragrafoTwoPoints.cloneNode(true);
paragrafoDisplayCountdown.className = "display";
paragrafoDisplayCountdown.id = "display-countdown";
//id creati solo per i minuti e i secondi, le ore non ci serviranno nell'esecuzione del codice
containerHours.id = "displayHours";
containerMinutes.id = "displayMinutes";
containerSeconds.id = "displaySeconds";
paragrafoTwoPoints.className = "styleTwoPoints";
paragrafoTwoPoints.innerHTML = ':';
twoTwoPoints.innerHTML = ':';
divContenitoreCountdown.prepend(paragrafoDisplayCountdown);
paragrafoDisplayCountdown.append(containerHours);
containerHours.innerHTML = '00';
containerHours.after(paragrafoTwoPoints);
paragrafoDisplayCountdown.append(containerMinutes);
containerMinutes.innerHTML = '00';
containerMinutes.after(twoTwoPoints);
paragrafoDisplayCountdown.append(containerSeconds);
containerSeconds.innerHTML = '00';





//creato pulsanti all'interno del nodo countdown
const pulsanteAvvia = document.createElement("button");
const pulsanteStop = document.createElement("button");
const pulsanteRefresh = document.createElement("button");
pulsanteAvvia.id = "avvia";
pulsanteAvvia.className = "styleBottonPlayer";
pulsanteAvvia.innerHTML = "Play";
pulsanteStop.id = "stopTimer";
pulsanteStop.className = "styleBottonPlayer";
pulsanteStop.innerHTML = "Stop";
pulsanteRefresh.id = "refresh";
pulsanteRefresh.className = "refreshStyle";
pulsanteRefresh.innerHTML = '<img id="circleArrows" src="/assets/img/imageRefresh.png" alt="image arrows refresh">';

//creato pulsanti 25" e 5"
const pulsanteTwentyFive = document.createElement("button");
pulsanteTwentyFive.id = "bottonTwentyFive";
pulsanteTwentyFive.innerHTML = "25'";
const pulsanteFive = document.createElement("button");
pulsanteFive.id = "bottonFive";
pulsanteFive.innerHTML = "5'";

const containerBotton = document.querySelector("#row-botton");
const circleTwentyFive = document.querySelector("#twentyFive");
const circleFive = document.querySelector("#five");
circleTwentyFive.append(pulsanteTwentyFive);
circleFive.append(pulsanteFive);

containerBotton.prepend(pulsanteMeno, pulsanteReset, pulsantePiu);
containerBotton.prepend(pulsanteAvvia, pulsanteStop);
containerBotton.append(pulsanteRefresh);

