import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const body = document.body;
const menu = document.querySelector('.header__bottom nav');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');
const header = document.querySelector('.header');


if (burger) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');


        if (!header.classList.contains('_scrolled')) {
            header.classList.toggle('_sticky');
        }

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


const arrow = `<button><svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
<path d="M4.92922 5.33709L8.82427 1.79221C8.93758 1.6871 9 1.54677 9 1.39715C9 1.24753 8.93758 1.10721 8.82427 1.00209L8.46387 0.667391C8.22902 0.4496 7.84733 0.4496 7.61285 0.667391L4.50228 3.48384L1.38715 0.663156C1.27384 0.558038 1.1228 0.5 0.961732 0.5C0.800489 0.5 0.649442 0.558038 0.536044 0.663156L0.17573 0.997855C0.0624217 1.10306 -3.24905e-08 1.24329 -3.90307e-08 1.39292C-4.55708e-08 1.54254 0.0624217 1.68286 0.17573 1.78798L4.07525 5.33709C4.18892 5.44246 4.34068 5.50033 4.50201 5.5C4.66397 5.50033 4.81564 5.44246 4.92922 5.33709Z" fill="white"/>
</svg></button>
`;

const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn && isMobile.any()) {
                btn.addEventListener('click', function () {
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