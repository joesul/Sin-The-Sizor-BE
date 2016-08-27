import React, { Component } from 'react';
import {Oscillator, BiquadFilter, Delay, DynamicsCompressor, StereoPanner, Gain, WaveShaper, Analyser, Destination} from 'react-audio'


class Sound extends Component{
  constructor(props){
    super(props)
  }

  render(){

    return{
      <Oscillator />
    }
  }
}

// export default Sound
