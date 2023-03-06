
document.addEventListener('DOMContentLoaded', function () {
    const testimonialsStepsTabLinks = document.querySelectorAll('.testimonials-steps__nav .tab-link');
    const tabcontent = document.querySelectorAll('.testimonials-steps__contents .testimonials-steps__content');

    if (testimonialsStepsTabLinks && testimonialsStepsTabLinks.length !== 0 && tabcontent && tabcontent.length !== 0) {
        testimonialsStepsTabLinks.forEach((link) => {
            link.addEventListener('mouseover', (event) => {
                [...testimonialsStepsTabLinks, ...tabcontent].forEach((link) => {
                    link.classList.remove('isActive');
                });
                event.target.classList.add('isActive');

                for (let i = 0; i < testimonialsStepsTabLinks.length; i++) {
                    if (testimonialsStepsTabLinks[i].classList.contains('isActive')) {
                        tabcontent[i].classList.add('isActive');
                    }
                }
            });
        });
    }


    const videos = document.querySelectorAll(".page-video");

    // FIXME: Баг с воспроизведением двух видео
    // FIXME: убрать setInterval сделать watcher
    // баг со свайпом на слайде

    function progressLoop() {
        setInterval(function () {
            const progressBar = document.querySelector("#progress-bar");
            const progressBarPlayingLine = document.querySelector(".testimonials-slider__btn-progress-bar");
            const timer = document.getElementById("timer");
            const video = document.querySelector(".swiper-slide-active .page-video");



            let val = Math.round((video.currentTime / video.duration) * 360);

            if (val > 0) {
                console.log(val);
                progressBar.classList.add('testimonials-slider__btn_playing')
            }
            progressBarPlayingLine.style.background = `conic-gradient(#FF522C ${val}deg, transparent 0deg)`


            timer.innerHTML = Math.round(video.currentTime) + " seconds";
        });
    }

    // function playPause() {

    // }

    // button.addEventListener("click", playPause);
    videos.forEach((video) => {
        video.addEventListener("play", progressLoop);
        video.addEventListener("play", function () {
            // console.log('play');
            video.muted = false;
            this.parentNode.parentNode.classList.add('isActive');
        });
        video.addEventListener("pause", function () {
            video.muted = true;
            // console.log('pause');
            this.parentNode.parentNode.classList.remove('isActive');
        });
        video.parentNode.querySelector('.page-btn').addEventListener('click', function () {
            // console.log(this);
                if (video.paused) {
                    video.play();
                    this.innerHTML = "&#10073;&#10073;";
                } else {
                    video.pause();
                    this.innerHTML = "►";
                }
        });

    });




});