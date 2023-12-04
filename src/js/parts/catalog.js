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


    if (targetEl.closest('.tags') && targetEl.hasAttribute('data-tag')) {
        e.preventDefault();

        const allTags = document.querySelectorAll('[data-tag]');
        allTags.forEach(tag => tag.classList.remove('_active'))
        targetEl.classList.add('_active');
    }

    if (targetEl.classList.contains('slide-tabs__tab')) {
        e.preventDefault();

        if (!targetEl.classList.contains('_active')) {
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
    }

    const backGround = document.querySelector('._background');

    if (targetEl.closest('._person') && !targetEl.closest('._person._active')) {
        e.preventDefault();
        backGround.classList.add('_active');
        targetEl.classList.add('_active');
        document.body.classList.add('_noscroll');
    } else {
        const personVideo = document.querySelector('._person');
        backGround.classList.remove('_active');
        personVideo.classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }
})