import React, { FC } from 'react';
import { TestimonialItem } from './TestimonialItem';

import './Testimonials.sass';

const TestimonialsComponent: FC = () => {

    // FIXME: сделать фабрику по созданию картинок
 
    return (
        <section className="testimonials">
            <div className="wrapper">
                <div className="testimonials-inner">
                    <div className="page-title page-title-h1">Отзывы</div>
                    <div className="testimonials-slider">
                        <div className="swiper testimonialSwiper">
                            <div className="testimonials-slider__toggles">
                                <div className="testimonials-slider__btn"><button
                                    className="swiper-button-prev page-btn testimonials-slider__btn-prev"></button>
                                </div>
                                <div className="testimonials-slider__btn" id="progress-bar">
                                    <div className="testimonials-slider__btn-progress-bar"></div><button
                                        className="swiper-button-next page-btn testimonials-slider__btn-next"></button>
                                </div>
                            </div>
                            <div className="testimonials-slider__items swiper-wrapper">
                                {<TestimonialItem />}
                            </div>
                        </div>
                    </div>
                    <div className="testimonials__steps">
                        <div className="testimonials__steps-title">
                            <div className="page-title page-title-h1">Cоздаем решения, которые определяют и изменяют мир
                                вокруг нас прямо здесь и сейчаc</div>
                            <div className="testimonials__steps-title_marker-after">

                            </div>
                        </div>
                        <div className="testimonials-steps">
                            <div className="testimonials-steps__nav">
                                <div className="tab-link page-text isActive">Выстраиваем <br />процесс разработки </div>
                                <div className="tab-link page-text">Проводим <br />технический аудит</div>
                                <div className="tab-link page-text">Запускаем с нуля, <br />поддерживаем и развиваем</div>
                                <div className="tab-link page-text">Консультируем как лушче <br />запустить продукт, фичу, на
                                    каких технологиях</div>
                            </div>
                            <div className="testimonials-steps__contents">
                                <div className="testimonials-steps__content isActive">
                                    <picture className="page-picture"><img src="assets/images/png/testimonial-steps.png"
                                        alt="testimonial-steps" /></picture>
                                </div>
                                <div className="testimonials-steps__content">
                                    <picture className="page-picture"><img src="assets/images/png/testimonial-steps.png"
                                        alt="testimonial-steps" /></picture>
                                </div>
                                <div className="testimonials-steps__content">
                                    <picture className="page-picture"><img src="assets/images/png/testimonial-steps.png"
                                        alt="testimonial-steps" /></picture>
                                </div>
                                <div className="testimonials-steps__content">
                                    <picture className="page-picture"><img src="assets/images/png/testimonial-steps.png"
                                        alt="testimonial-steps" /></picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export { TestimonialsComponent };