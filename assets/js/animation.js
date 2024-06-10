"use strict";

let runSlug = document.querySelector("#slug");
let runMario = document.querySelector("#mario");

runSlug.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      runSlug.style.left = timePassed / 1.8 + 'px';
      runMario.style.left = timePassed / 1.8 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  };
