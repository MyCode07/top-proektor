import { accordeon } from "./static/accordeon.js";
import { replaceDomElements } from "./static/replace.js";
import { stickyHeader } from "./parts/header.js";
import { maskInputs } from "./static/inputmask.js";
import { createMap } from "./parts/map.js";

import "./parts/catalog.js";
import "./parts/sliders.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/video.js";
import "./static/ticker.js";
import { Fancybox } from "@fancyapps/ui";

stickyHeader()
replaceDomElements();
accordeon();
maskInputs('+7 999 999 99 99', '._phone-mask')
createMap();

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});


const inputItems = [...document.querySelectorAll('input ')].concat([...document.querySelectorAll('textarea ')])
if (inputItems.length) {
    inputItems.forEach(input => {
        if (input.closest('.form__item')) {
            input.addEventListener('input', () => {
                if (input.value != '') input.classList.add('_active')
                else input.classList.remove('_active')
            })
        }
    })
}
