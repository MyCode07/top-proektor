document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_show-all') && targetEl.closest('.catalog-tags')) {
        const tags = document.querySelector('.tags');
        tags.classList.toggle('_active');

        if (tags.classList.contains('_active')) targetEl.querySelector('span').textContent = 'Скрыть';
        else targetEl.querySelector('span').textContent = 'Показать все';
    }

    if (targetEl.classList.contains('sort') && targetEl.closest('.sidebar')) {
        const cats = document.querySelector('.sidebar-categories');
        cats.classList.toggle('_active');
    }


    if (targetEl.closest('.sidebar-categories') && targetEl.hasAttribute('data-cat') && !targetEl.classList.contains('_active')) {
        e.preventDefault();
        toggleElem(targetEl, document.querySelectorAll('[data-cat]'))
    }

    if (targetEl.closest('.tags') && targetEl.hasAttribute('data-tag') && !targetEl.classList.contains('_active')) {
        e.preventDefault();
        toggleElem(targetEl, document.querySelectorAll('[data-tag]'))
    }

    if (targetEl.classList.contains('slide-tabs__tab') && !targetEl.classList.contains('_active')) {
        e.preventDefault();

        const tabId = targetEl.dataset.tab;
        const slideSection = targetEl.closest('section.slide');
        const allTabs = slideSection.querySelectorAll('.slide-tabs__tab');
        const allTabsContnet = slideSection.querySelectorAll('.slide-item');

        allTabsContnet.forEach(contnet => {
            if (contnet.dataset.tabContent == tabId)
                contnet.classList.add('_active')
            else
                contnet.classList.remove('_active')
        })

        allTabs.forEach(tab => {
            if (tab.dataset.tab == tabId)
                tab.classList.add('_active')
            else
                tab.classList.remove('_active')
        })
    }

    const personVideo = document.querySelector('._person');
    if (personVideo) {
        if (targetEl.closest('._person') && !targetEl.closest('._person._active')) {
            e.preventDefault();
            targetEl.classList.add('_active');
        } else {
            personVideo.classList.remove('_active');
        }
    }
})

function toggleElem(elem, selector) {
    selector.forEach(item => {
        item.classList.remove('_active')
    })
    elem.classList.add('_active');
}