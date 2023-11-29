import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');

if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')
        let pagination = section.querySelector('.pagination')

        if (section.classList.contains('example')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination
                ],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 18,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                pagination: {
                    el: pagination,
                    clickable: true
                },
            })
        }
        else if (section.classList.contains('review')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination
                ],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 16,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                pagination: {
                    el: pagination,
                    clickable: true
                },
            })
        }
    })
}