import Swiper from 'swiper';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

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
        else if (section.classList.contains('solutions')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination
                ],
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 24,

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
        else if (section.classList.contains('product-section')) {
            let productSlider = new Swiper('.product__slider-thumbs .swiper', {
                modules: [FreeMode],
                spaceBetween: 10,
                slidesPerView: 'auto',
                freeMode: true,
                watchSlidesProgress: true,
            });

            new Swiper('.product__slider .swiper', {
                modules: [Thumbs, Pagination],
                spaceBetween: 10,
                slidesPerView: 'auto',
                grabCursor: true,
                thumbs: {
                    swiper: productSlider,
                },
                pagination: {
                    el: pagination,
                    clickable: true
                },
            });
        }
    })
}