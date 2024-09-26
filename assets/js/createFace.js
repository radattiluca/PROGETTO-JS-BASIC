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
pulsantePiu.innerHTML = "+";
pulsanteReset.id = "reset";
pulsanteReset.innerHTML = "Reset";
pulsanteMeno.id = "minus";
pulsanteMeno.innerHTML = "-";



//creato contenitore countdown con paragrafo all'interno del nodo row-countdown
const divContenitoreCountdown = document.querySelector("#row-countdown");
const paragrafoDisplayCountdown = document.createElement("p");
paragrafoDisplayCountdown.className = "display";
paragrafoDisplayCountdown.id = "display-countdown";
paragrafoDisplayCountdown.innerHTML = '0';
divContenitoreCountdown.prepend(paragrafoDisplayCountdown);

//creato pulsanti all'interno del nodo countdown
const pulsanteImposta = document.createElement("button");
const pulsanteAvvia = document.createElement("button");
const pulsanteStop = document.createElement("button");
const pulsanteRefresh = document.createElement("button");
pulsanteImposta.id = "imposta";
pulsanteImposta.innerHTML = "Set";
pulsanteAvvia.id = "avvia";
pulsanteAvvia.innerHTML = "Play";
pulsanteStop.id = "stopTimer";
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
const circleContAnairBotton = document.querySelector("#countAiner");
const circleCountDownAiner = document.querySelector("#countDownAiner");
const circleTwentyFive = document.querySelector("#twentyFive");
const circleFive = document.querySelector("#five");

circleContAnairBotton.append(pulsanteMeno, pulsanteReset, pulsantePiu);
circleCountDownAiner.after(pulsanteRefresh);
circleCountDownAiner.append(pulsanteAvvia, pulsanteImposta, pulsanteStop);
circleTwentyFive.append(pulsanteTwentyFive);
circleFive.append(pulsanteFive);