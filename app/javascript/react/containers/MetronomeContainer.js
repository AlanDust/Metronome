import React, { Component } from 'react';

class MetronomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      bpm: 120,
    };
    this.click = new Audio("https://s3.amazonaws.com/metronome-production/metronome+sounds/clickDownbeat.wav");
    this.clickDownbeat = new Audio("https://s3.amazonaws.com/metronome-production/metronome+sounds/metronome_click.wav");
  }

  handleBpmChange = event => {
    const bpm = event.target.value;

    if (this.state.playing) {
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      this.setState({
        count: 0,
        bpm
      });
    } else {
      this.setState({ bpm });
    }
  };

  startStop = () => {
    if (this.state.playing) {
      clearInterval(this.timer);
      this.setState({
        playing: false
      });
    } else {
      this.timer = setInterval(
        this.playClick,
        (60 / this.state.bpm) * 1000
      );
      this.setState(
        {
          count: 0,
          playing: true
        },
        this.playClick
      );
    }
  };

  playClick = () => {
    this.click.play();
  };

  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div className="beats-per-minute">
          <div>{bpm} BPM</div>
          <input type="range" min="40" max="260" value={bpm} onChange={this.handleBpmChange}/>
        </div>
        <button className="start-stop" onClick={this.startStop}>
          {playing ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default MetronomeContainer;
