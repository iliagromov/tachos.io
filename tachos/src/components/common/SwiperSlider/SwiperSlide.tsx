import React, { FC, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {  ControlBar,
    CurrentTimeDisplay,
    DurationDisplay,
    Player,
    PlayerProps,
    PlayerState,
    ProgressControl,
    TimeDivider, } from 'video-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { SwiperSlide, useSwiper } from "swiper/react";
import { ReactSVG } from 'react-svg';


// style
import './SwiperSlide.sass';
import CustomPlayer from '../Player/Player';
type SwiperSlideComponentProps = {
    video: string
    image: any
    testimonial: any

}
const SwiperSlideComponent: FC<SwiperSlideComponentProps> = ({
    video,
    image,
    testimonial

}) => {
     
    const { 
        iconPlay,
    } =  useStaticQuery(graphql`
        query  {
            iconPlay:  file(relativePath: { eq: "icon-play.svg" }) {
                publicURL
			    name
            }
        }`);     


    const testProps: PlayerProps = { 
        autoPlay: true,
        src: video,
        preload: 'auto',
        muted: true,
        aspectRatio: '4:3',
    };

    const [isPlay, setPlay] = useState(false);


    const playerRef = useRef<PlayerState>(null);



    function onPlay(){
        console.log('test');
        setPlay(!isPlay);
    }
    return (
            <>
                <div className="testimonials-slide__img testimonials-slide__img_mask">
                    <div className="testimonials-slide__img-poster">
                        <GatsbyImage image={image} alt={'img'} />
                    </div>
                    <div className="testimonials-slide__img-video">
                            <CustomPlayer 
                            video={video}
                            isPlay={isPlay}
                        />
                        <div className="testimonials-slide__img-video-btn-play">
                            <div id="timer"></div>
                            <button 
                                className="page-btn" 
                                aria-label="Play"
                                role="button"
                                onClick={onPlay}
                                >
                                    <ReactSVG className="page-svg" src={iconPlay.publicURL} />
                                </button>
                        </div>
                    </div>
                </div>
                <div className="testimonials-slide__name">
                    <h3 className="page-title page-title-h3">{testimonial.title}</h3>
                    <div className="page-title-caption page-title-caption-3">{testimonial.subtitle}</div>
                </div>
            </>

    );
}


export { SwiperSlideComponent };

