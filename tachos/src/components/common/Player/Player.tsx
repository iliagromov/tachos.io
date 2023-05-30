import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import { Player, ControlBar } from 'video-react';
import { Button } from 'reactstrap';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

type PlayerControlExampleProps = {
    video: string
    onPlay: boolean
}

export default class CustomPlayer extends Component<PlayerControlExampleProps> {
  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie,
      loop: true

    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }


  render() {
    console.log(this.props.video);
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay={false}
        >
          <source src={this.props.video} />
          <ControlBar autoHide={false} />
        </Player>
      </div>
    );
  }
}