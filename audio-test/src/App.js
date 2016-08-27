import React, { Component } from 'react';
// import Sound from './Sound'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      a: 440,
      c: 261.6,
      term: ""
    }
  }
  move(e){
    console.log('this is', setState({term: e.target.value}))
  }
  handleSound(note){
    console.log("starting up")
    note = this.state.term
if(note === this.state.a){
  return note

}else if (note === this.state.c) {
  return note
}console.log("this is", note)
    let audioCtx = new window.AudioContext();
    let oscillator = audioCtx.createOscillator();
    oscillator.type = 'square'
    oscillator.frequency.value = note
    oscillator.connect(audioCtx.destination);

    oscillator.start()
    oscillator.stop(2)
}
//   handleSound(){
//     console.log("starting up")
//
//     var audio = new window.webkitAudioContext(),
//         position = 0,
//         scale = {
//             g: 392,
//             f: 349.23,
//             e: 329.63,
//             b: 493.88,
// c: 261.6, a: 440
//         },
//         song = "cfefcc-fff-abb-=afefaaccffgfe---";
//
//     setInterval(play, 1000 / 4);
//
//     function createOscillator(freq) {
//         var osc = audio.createOscillator();
//
//         osc.frequency.value = freq;
//         osc.type = "square";
//         osc.connect(audio.destination);
//         osc.start(0);
//
//         setTimeout(function() {
//             osc.stop(0);
//             osc.disconnect(audio.destination);
//         }, 1000 / 4)
//     }
//
//     function play() {
//         var note = song.charAt(position),
//             freq = scale[note];
//         position += 1;
//         if(position >= song.length) {
//             position = 0;
//         }
//         if(freq) {
//             createOscillator(freq);
//         }
//     }
    // oscillator.start()
    // oscillator.stop(.455)
//  }
playSpecificNote(e) { //todo
		// onKeyDown={this.playSpecificNote}
		// onKeyUp={this.stopSpecificNote}

		//todo: get focus
		let keyPressed = e;

		console.log("e", e);

		// if (isFunctionalKey(keyPressed)) {
		// 	PianoActions.playSpecificNote(this.props, keyPressed);
		// }
	}

  render() {
    let note = this.setState.term
    return (
      // <div className="App" onKeyDown={(e) => this.setState({note)} >
        <div className="App" onKeyDown={(e) => this.move()} >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button>Beep</button>

        </p>
        <div className="keyboard">

        </div>
      </div>
    );
  }
}

export default App;
