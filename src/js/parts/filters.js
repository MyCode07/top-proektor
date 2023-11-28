document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('hero-works__filter-title')) {
        document.querySelector('.hero-works__filter-tags').classList.toggle('_active');
        targetEl.classList.toggle('_active');
    }


    if (targetEl.closest('.hero-works__filter-tags') && targetEl.hasAttribute('data-tag')) {
        document.querySelector('.hero-works__filter-title span').textContent = targetEl.textContent;

        const allTags = document.querySelectorAll('[data-tag]');
        allTags.forEach(tag => tag.classList.remove('_active'))

        targetEl.classList.add('_active');
    }
})