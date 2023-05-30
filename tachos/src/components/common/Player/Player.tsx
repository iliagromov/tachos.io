import React, { Component } from 'react';

import { Player, ControlBar } from 'video-react';

import { graphql, useStaticQuery } from 'gatsby';
import { ReactSVG } from 'react-svg';

import './Player.sass';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

type PlayerProps = {
    "currentSrc": string
    "duration": 596.48,
    "currentTime": 1.516227,
    "seekingTime": 0,
    "buffered": {},
    "waiting": false,
    "seeking": false,
    "paused": true,
    "autoPaused": false,
    "ended": false,
    "playbackRate": 1,
    "muted": false,
    "volume": 1,
    "readyState": 4,
    "networkState": 1,
    "videoWidth": 853,
    "videoHeight": 480,
    "hasStarted": true,
    "userActivity": false,
    "isActive": false,
    "isFullscreen": false,
    "activeTextTrack": null,
    "error": null,
    "src": "",
    "srcObject": null,
    "crossOrigin": null,
    "preload": "auto",
    "defaultPlaybackRate": 1,
    "played": {},
    "seekable": {},
    "autoplay": true,
    "loop": false,
    "controls": false,
    "defaultMuted": false,
    "textTracks": {},
    "width": 0,
    "height": 0,
    "poster": ""
}


type CustomPlayerProps = {
    video: string
    iconBtn: string
    player?: any
}

export default class CustomPlayer extends Component<CustomPlayerProps> {
  constructor(props: any, context: any) {
    super(props, context);
    
    this.state = {
        source: sources.bunnyMovie,
        loop: true,
        isActive: false,
    };

    this.play = this.play.bind(this);
    this.playToggle = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted: any) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state: any) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  }

  play() {
    this.player.play();
  }

  playToggle() {
    this.player.load();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }


  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay={false}
          muted={true}
        >
          <source src={this.props.video} />
          <ControlBar autoHide={true} />
        </Player>
        <div className="testimonials-slide__img-video-btn-play">              
            { this.state.player?.paused && <button 
                className="page-btn" 
                aria-label="Play"
                role="button"
                onClick={this.playToggle} 
                >
                    <div className="page-btn_bg"></div>
                    <ReactSVG className="page-svg" src={this.props.iconBtn} />
                </button>
            }
        </div>
      </div>
    );
  }
}