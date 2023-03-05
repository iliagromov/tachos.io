
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


    const progressBar = document.querySelector("#progress-bar");
    const playing = document.querySelector(".testimonials-slider__btn-progress-bar");
    const timer = document.getElementById("timer");
    const button = document.getElementById("play");
    const video = document.querySelectorAll("video")[0];


    function progressLoop() {
        setInterval(function () {
            let val =  Math.round((video.currentTime / video.duration) * 360);
         
            if(val > 0) {
                progressBar.classList.add('testimonials-slider__btn_playing')
            }
            playing.style.background = `conic-gradient(#FF522C ${val}deg, transparent 0deg)`
           
            
            timer.innerHTML = Math.round(video.currentTime) + " seconds";
        });
    }

    function playPause() {
        if (video.paused) {
            video.play();
            button.innerHTML = "&#10073;&#10073;";
        } else {
            video.pause();
            button.innerHTML = "►";
        }
    }

    button.addEventListener("click", playPause);
    video.addEventListener("play", progressLoop);


    
});