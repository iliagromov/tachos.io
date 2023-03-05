
document.addEventListener('DOMContentLoaded', function () {
    const testimonialsStepsTabLinks = document.querySelectorAll('.testimonials-steps__nav .tab-link');
    const tabcontent = document.querySelectorAll('.testimonials-steps__contents .testimonials-steps__content');
    
    if (testimonialsStepsTabLinks && testimonialsStepsTabLinks.length !== 0 && tabcontent && tabcontent.length !==0) {
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
});