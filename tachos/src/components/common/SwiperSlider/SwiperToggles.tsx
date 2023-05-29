import React, { FC } from 'react';

import { ReactSVG } from 'react-svg';
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './SwiperSlider.sass';
import { useSwiper } from 'swiper/react';

const SwiperToggles: FC = () => {
    const selfSwiper = useSwiper();
    const onPrev = () => selfSwiper.slidePrev();
    const onNext = () => selfSwiper.slideNext();
    const {
		iconArrow
	} = useStaticQuery(graphql`
		query  {
			iconArrow: file(relativePath: { eq: "arrow-right.svg" }) {
			  publicURL
			  name
		  	}
		}`);

    return (
        <div className="testimonials-slider__toggles">
            <div className="testimonials-slider__btn">
                <button
                    onClick={onPrev}
                    className="swiper-button-prev page-btn testimonials-slider__btn-prev">
                    <ReactSVG 
                        className="page-svg" 
                        src={iconArrow.publicURL} />

                    </button>
            </div>
            <div className="testimonials-slider__btn" id="progress-bar">
                <div className="testimonials-slider__btn-progress-bar"></div>
                <button
                    onClick={onNext}
                    className="swiper-button-next page-btn testimonials-slider__btn-next">
                        <ReactSVG 
                        className="page-svg" 
                        src={iconArrow.publicURL} />
                    </button>
            </div>
        </div>
    )
}


export { SwiperToggles };
