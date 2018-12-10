import React, { Component } from 'react';

class MetronomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };
  }

  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div className="beats-per-minute">
          <div>{bpm} BPM</div>
          <input type="range" min="40" max="260" value={bpm} />
        </div>
        <button>{playing ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}

export default MetronomeContainer;
