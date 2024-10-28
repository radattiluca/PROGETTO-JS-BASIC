"use strict";
//created clock container with paragraph inside row-clock node
const divContainerClock = document.querySelector("#row-clock");
const paragraphDisplayClock = document.createElement("p");
paragraphDisplayClock.className = "display";
paragraphDisplayClock.id = "display-clock";
paragraphDisplayClock.innerHTML = '0';
divContainerClock.appendChild(paragraphDisplayClock);


//created counter container with paragraph inside row-counter node
const divContainerCounter = document.querySelector("#row-counter");
const paragraphDisplayCounter = document.createElement("p");
paragraphDisplayCounter.className = "display";
paragraphDisplayCounter.id = "display-count";
paragraphDisplayCounter.innerHTML = '0';
divContainerCounter.prepend(paragraphDisplayCounter);

//created buttons inside row-counter node
const pushPlus = document.createElement("button");
const pushReset = document.createElement("button");
const pushMinus = document.createElement("button");
pushPlus.id = "plus";
pushPlus.className = "styleButtonPlayer";
pushPlus.innerHTML = "+";
pushReset.id = "reset";
pushReset.className = "styleButtonPlayer";
pushReset.innerHTML = "Reset";
pushMinus.id = "minus";
pushMinus.className = "styleButtonPlayer";
pushMinus.innerHTML = "-";
paragraphDisplayCounter.after(pushMinus, pushReset, pushPlus);



//created countdown container with div inside row-countdown node
const divContainerCountdown = document.querySelector("#row-countdown");
const paragraphDisplayCountdown = document.createElement("div");
const containerHours = document.createElement('div');
const containerMinutes = document.createElement('div');
const containerSeconds = document.createElement('div');
const paragraphTwoPoints = document.createElement('span');
const twoTwoPoints = paragraphTwoPoints.cloneNode(true);
paragraphDisplayCountdown.className = "display";
paragraphDisplayCountdown.id = "display-countdown";

//individual displays were created to contain hours, minutes and seconds
containerHours.id = "displayHours";
containerMinutes.id = "displayMinutes";
containerSeconds.id = "displaySeconds";
paragraphTwoPoints.className = "styleTwoPoints";
paragraphTwoPoints.innerHTML = ':';
twoTwoPoints.innerHTML = ':';
divContainerCountdown.prepend(paragraphDisplayCountdown);
paragraphDisplayCountdown.append(containerHours);
containerHours.innerHTML = '00';
containerHours.after(paragraphTwoPoints);
paragraphDisplayCountdown.append(containerMinutes);
containerMinutes.innerHTML = '00';
containerMinutes.after(twoTwoPoints);
paragraphDisplayCountdown.append(containerSeconds);
containerSeconds.innerHTML = '00';





//created buttons inside countdown node
const pushPlay = document.createElement("button");
const pushStop = document.createElement("button");
const pushRefresh = document.createElement("button");

pushPlay.id = "play";
pushPlay.className = "styleButtonPlayer";
pushPlay.innerHTML = "Play";

pushStop.id = "stopTimer";
pushStop.className = "styleButtonPlayer";
pushStop.innerHTML = "Pause";

pushRefresh.id = "refresh";
pushRefresh.className = "refreshStyle styleButtonPlayer";

paragraphDisplayCountdown.after(pushPlay, pushStop);
pushRefresh.innerHTML = '<img id="circleArrows" src="/assets/img/imageRefresh.png" alt="image arrows refresh">';

//created 25", 15" and 5" buttons
const pushTwentyFive = document.createElement("button");
pushTwentyFive.id = "buttonTwentyFive";
pushTwentyFive.innerHTML = "25'";

const pushFive = document.createElement("button");
pushFive.id = "buttonFive";
pushFive.innerHTML = "5'";

const pushFifteen = document.createElement("button");
pushFifteen.id = "buttonFifteen";
pushFifteen.innerHTML = "15'";

//created containers to insert the related timer buttons
const containerBotton = document.querySelector("#row-button");
const circleTwentyFive = document.querySelector("#twentyFive");
const circleFive = document.querySelector("#five");
const circleFifteen = document.querySelector("#fifteen");

const paragraphTwentyFive = document.createElement("p");
const paragraphFive = document.createElement("p");
const paragraphFifteen = document.createElement("p");

circleTwentyFive.append(pushTwentyFive);
circleFive.append(pushFive);
circleFifteen.append(pushFifteen);
containerBotton.append(pushRefresh);



