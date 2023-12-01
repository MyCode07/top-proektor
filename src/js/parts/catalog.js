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

    if (targetEl.classList.contains('slide-tabs__tab')){
        e.preventDefault();

        const allTabs = document.querySelectorAll('.slide-tabs__tab');
        allTabs.forEach(tab => tab.classList.remove('_active'))
        targetEl.classList.add('_active');
    }
})