import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './Video.sass';
type VideoComponentProps = {
    videoSrcURL: any
    videoTitle: any

}
const VideoComponent: FC<VideoComponentProps> = ({ videoSrcURL, videoTitle, ...props }) => {
 
    return (

        <div className="video">
            <iframe
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            />
      </div>

    );
}


export { VideoComponent };

