const scrollDownBtn = document.querySelector('.scroll-down');

export const scrollDown = () => {
    if (!scrollDownBtn) return;

    const section = scrollDownBtn.closest('section').nextElementSibling;
    const toPos = section.getBoundingClientRect().top

    scrollDownBtn.addEventListener('click', () => {
        const currnetPos = window.scrollY;
        if (currnetPos < toPos)
            window.scrollTo(0, toPos)
    })
}