import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Video } from 'gatsby-video';
import { ReactSVG } from 'react-svg';


import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination } from "swiper";

// style
import './SwiperSlider.sass';
import { SwiperToggles } from './SwiperToggles';



const SwiperSliderComponent: FC = () => {
    const { 
        testimonial1,
        testimonial2,
        testimonial3,
        videio1
    } =  useStaticQuery(graphql`
        query  {
            testimonial1:  file(relativePath: { eq: "testimonial-1.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
            testimonial2:  file(relativePath: { eq: "testimonial-2.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
            testimonial3:  file(relativePath: { eq: "testimonial-3.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
            videio1: file(relativePath: {eq: "video-testimonial.mp4"}) {
                relativePath
                name
                id
                publicURL
                childVideoFfmpeg {
                    webm: transcode(
                        outputOptions: ["-crf 20", "-b:v 0"]
                        maxWidth: 900
                        maxHeight: 480
                        fileExtension: "webm"
                        codec: "libvpx-vp9"
                        ) {
                        width
                        src
                        presentationMaxWidth
                        presentationMaxHeight
                        originalName
                        height
                        fileExtension
                        aspectRatio
                    }
                    mp4: transcode(
                        maxWidth: 900
                        maxHeight: 480
                        fileExtension: "mp4"
                    
                    ){
                        width
                        src
                        presentationMaxWidth
                        presentationMaxHeight
                        originalName
                        height
                        fileExtension
                        aspectRatio
                    }
                }
            }
        }`);
      const image1 = getImage(testimonial1);      
      const image2 = getImage(testimonial2);      
      const image3 = getImage(testimonial3);   
      const videos = videio1;
      console.log(videos);
    return (

        <div className="testimonials-slider">
            <Swiper
                navigation={false}
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                className="testimonialSwiper" >
                <SwiperToggles />
                <div className="testimonials-slider__items swiper-wrapper">
                    <SwiperSlide className='testimonials-slide '>
                        <div className="testimonials-slide__img testimonials-slide__img_mask">
                            <div className="testimonials-slide__img-poster">
                                <GatsbyImage image={image2} alt={'img'} />
                            </div>
                            <div className="testimonials-slide__img-video">
                                {/* <Video
                                    preload="true" 
                                    poster={image2}
                                    autoPlay
                                    muted={false}
                                    loop
                                    controls
                                    sources={[videos.webm, videos.mp4]}
                                    /> */}
                                <div className="testimonials-slide__img-video-btn-play">
                                    <div id="timer"></div>
                                    <button className="page-btn" aria-label="Play"
                                        role="button">►</button>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-slide__name">
                            <h3 className="page-title page-title-h3">Дима Энтелис</h3>
                            <div className="page-title-caption page-title-caption-3">CTO Entelis team</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='testimonials-slide '>
                        <div className="testimonials-slide__img testimonials-slide__img_mask">
                            <div className="testimonials-slide__img-poster">
                                <GatsbyImage image={image1} alt={'img'} />
                            </div>
                            <div className="testimonials-slide__img-video">
                                {/* <Video
                                    preload="true" 
                                    poster={image1}
                                    autoPlay
                                    muted={false}
                                    loop
                                    controls
                                    sources={[videos.webm, videos.mp4]}
                                    /> */}
                                <div className="testimonials-slide__img-video-btn-play">
                                    <div id="timer"></div><button className="page-btn" aria-label="Play"
                                        role="button">►</button>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-slide__name">
                            <h3 className="page-title page-title-h3">Дима Энтелис</h3>
                            <div className="page-title-caption page-title-caption-3">CTO Entelis team</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='testimonials-slide '>
                        <div className="testimonials-slide__img testimonials-slide__img_mask">
                            <div className="testimonials-slide__img-poster">
                                <GatsbyImage image={image3} alt={'img'} />
                            </div>
                            <div className="testimonials-slide__img-video">
                                {/* <Video
                                    preload="true" 
                                    poster={image3}
                                    autoPlay
                                    muted={false}
                                    loop
                                    controls
                                    sources={[videos.webm, videos.mp4]}
                                    /> */}
                                <div className="testimonials-slide__img-video-btn-play">
                                    <div id="timer"></div><button className="page-btn" aria-label="Play"
                                        role="button">►</button>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-slide__name">
                            <h3 className="page-title page-title-h3">Дима Энтелис</h3>
                            <div className="page-title-caption page-title-caption-3">CTO Entelis team</div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>

    );
}


export { SwiperSliderComponent };

