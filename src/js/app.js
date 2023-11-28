import { accordeon } from "./static/accordeon.js"; 
// import { maskInputs } from "./static/inputmask.js";
import { replaceDomElements } from "./static/replace.js";

import "./parts/sliders.js";
// import "./parts/popup.js";
// import "./parts/menu.js";
// import "./parts/read-more.js";
// import "./parts/filters.js";

import "./static/ticker.js";

// import { scrollDown } from "./parts/scroll-down.js";
// import { stickyHeader } from "./parts/header.js";
// import { animateAction } from "./parts/animations.js";

// stickyHeader()
replaceDomElements();
accordeon();

// scrollDown();
// animateAction()

// maskInputs('+7 999 999 999 999', '.phone')

// document.addEventListener('click', function (e) {
//     let targetEl = e.target;

//     if (targetEl.classList.contains('pages-close')) {
//         document.querySelector('.pages').classList.toggle('_hide');
//     }
// }) 