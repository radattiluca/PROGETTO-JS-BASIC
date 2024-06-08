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
paragrafoDisplayCounter.after( pulsanteMeno, pulsanteReset, pulsantePiu);


//creato contenitore countdown con paragrafo all'interno del nodo row-countdown
const divContenitoreCountdown = document.querySelector("#row-countdown");
const paragrafoDisplayCountdown = document.createElement("p");
paragrafoDisplayCountdown.className = "display";
paragrafoDisplayCountdown.id = "display-countdown";
paragrafoDisplayCountdown.innerHTML = '0';
divContenitoreCountdown.appendChild(paragrafoDisplayCountdown);
//creato pulsanti all'interno del nodo countdown
const pulsanteImposta = document.createElement("button");
const pulsanteAvvia = document.createElement("button");
const pulsanteStop = document.createElement("button");
pulsanteImposta.id = "imposta";
pulsanteImposta.innerHTML = "Imposta";
pulsanteAvvia.id = "avvia";
pulsanteAvvia.innerHTML = "Avvia";
pulsanteStop.id = "stop";
pulsanteStop.innerHTML = "Stop";
divContenitoreCountdown.append( pulsanteAvvia, pulsanteImposta, pulsanteStop);


