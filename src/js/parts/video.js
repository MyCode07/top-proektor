const personVideo = document.querySelector('._person');
if (personVideo) {
    const video = personVideo.querySelector('video');
    personVideo.addEventListener('click', () => {
        personVideo.classList.toggle('_active')
        if (personVideo.classList.contains('_active')) {
            video.play();
        }
        else {
            let src = video.currentSrc;
            video.pause();

            setTimeout(() => {
                video.src = '';
                video.src = src;
            }, 300);
        }
    })
}