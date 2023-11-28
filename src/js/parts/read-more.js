document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_read-more')) {
        const showText = targetEl.dataset.showText;

        const textContnet = targetEl.closest('.text-content')
        if (textContnet) {
            textContnet.classList.toggle('_active');

            if (textContnet.classList.contains('_active')) targetEl.textContent = 'Скрыть';
            else targetEl.textContent = showText;
        }
    }

    if (targetEl.classList.contains('_more-marks')) {
        const showText = targetEl.dataset.showText;

        const grid = targetEl.closest('section').querySelector('.grid')
        grid.classList.toggle('_active');

        if (grid.classList.contains('_active')) targetEl.textContent = 'Скрыть';
        else targetEl.textContent = showText;
    }
}) 