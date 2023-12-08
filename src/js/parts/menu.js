import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const body = document.body;
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');
const header = document.querySelector('.header');


if (burger) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');

        if (menu.classList.contains('_open')) lockPadding();
        else unLockPadding();
    })
}



if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {

            if (!isMobile.any())
                if (menu.classList.contains('_open')) unLockPadding();
                else lockPadding()

            menu.classList.toggle('_open');
            burger.classList.toggle('_active');
            body.classList.toggle('_noscroll');
        })
    })
}


const arrow = `<button><svg width="6" height="3" viewBox="0 0 6 3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L0 0H6L3 3Z" />
                </svg></button>`;

const mbMenuArrow = `<button class="menu-arrow"><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-0.5" y="0.5" width="55" height="55" rx="27.5" transform="matrix(-1 0 0 1 55 0)" stroke="white" stroke-opacity="0.4"/>
<path d="M25.5 28L27.5 25L20 28L27.5 31L25.5 28Z" fill="white"/>
<path d="M34 28H25" stroke="white"/>
</svg>
</button>`;

const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (link.closest('.menu')) link.insertAdjacentHTML('beforebegin', mbMenuArrow);

            if (btn && isMobile.any()) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }

            const btnArrow = li.querySelector('.menu-arrow');
            if (btnArrow && isMobile.any()) {
                btnArrow.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })


    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }

}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if ((!targetEl.closest('header nav') || (targetEl.closest('header') && targetEl.tagName == 'NAV')) && window.innerWidth > 1024) {
        const activeMenuItems = document.querySelectorAll('nav li[data-open]');
        if (activeMenuItems.length)
            activeMenuItems.forEach(item => item.removeAttribute('data-open'))
    }
})