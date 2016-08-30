import React, { Component } from 'react';
// import Board from './Board'
// import {Spring} from 'react-motion'
import {Surface} from 'react-canvas'
import './App.css';

let audioCtx = new window.AudioContext();
let oscillator = audioCtx.createOscillator();
oscillator.connect(audioCtx.destination);
oscillator.frequency.value = 0;
oscillator.start()
console.log(audioCtx);

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      positionX: 0,
      positionY: 0,
      //white keys frequency
      e3: 164.814,//a
      f3: 174.614,//s
      g3: 195.998,//d
      a3: 220,    //f
      b3: 246.942,//g
      c4: 261.626,//h
      d4: 293.665, //j
      e4: 329.628, //k
      f4: 349.228, //l
      g4: 391.995, //;

      //black keys frequency
      ds3: 155.563, //q
      fs3: 184.997, //e
      gs3: 207.652, //r
      as3: 233.082, //t
      cs4: 277.183, //u
      ds4: 311.127,//i
      fs4: 369.994,//o
      gs4: 415.305,//p
      as4: 466.164,//[
      sound: ""
    }
  }

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown.bind(this), false);
    window.addEventListener('keyup', this.handleKeyUp.bind(this), false);
  };

   handleSound(note){

    //let oscillator = audioCtx.createOscillator();
    oscillator.type = 'sawtooth'
    oscillator.frequency.value = note
    oscillator.connect(audioCtx.destination);
  }

  handleKeyUp(event) {
    console.log("hi");
    oscillator.frequency.value = 0;
  }

     handleKeyDown(event){
       console.log("I have been pressed", event.keyCode)
       console.log("starting up")
       let note;
       if(event.keyCode === 65){
         note = this.state.e3
         console.log(note);
       }else if(event.keyCode === 83){
         note = this.state.f3

       }else if (event.keyCode === 68) {
         //oscillator.stop()
         note = this.state.g3

       }else if (event.keyCode === 70) {
         note = this.state.a3

       }else if (event.keyCode === 71) {
         note = this.state.b3

       }else if (event.keyCode === 72) {
         note = this.state.c4

       }else if (event.keyCode === 74) {
         note = this.state.d4

       }else if (event.keyCode === 75) {
         note = this.state.e4

       }else if (event.keyCode === 76) {
         note = this.state.f4

       }else if (event.keyCode === 186) {
         note = this.state.g4

       }/* These are the black key frequencies*/
       else if (event.keyCode === 81) {
         note = this.state.ds4

       }else if (event.keyCode === 69) {
         note = this.state.fs3

       }else if (event.keyCode === 82) {
         note = this.state.gs3

       }else if (event.keyCode === 74) {
         note = this.state.as3

       }else if (event.keyCode === 85) {
         note = this.state.cs4

       }else if (event.keyCode === 73) {
         note = this.state.ds4

       }else if (event.keyCode === 79) {
         note = this.state.fs4

       }else if (event.keyCode === 80) {
         note = this.state.gs4

       }else if (event.keyCode === 219) {
         note = this.state.as4

     }
     this.handleSound(note)
   }
   handleSong(){
       console.log("starting up")

       let audio = new window.webkitAudioContext(),
           position = 0,
           scale = {
               g: 392,
               f: 349.23,
               e: 329.63,
               b: 493.88,
               c: 261.6,
               a: 440
           },
           song = "cfefcc-fff-abb-=afefaaccffgfe---";

       setInterval(play, 1000 / 4);

       function createOscillator(freq) {
           var osc = audio.createOscillator();

           osc.frequency.value = freq;
          //  osc.type = "Square";
           osc.connect(audio.destination);
           osc.start(0);

           setTimeout(function() {
               osc.stop(0);
               osc.disconnect(audio.destination);
           }, 1000 / 4)
       }

       function play() {
           var note = song.charAt(position),
               freq = scale[note];
           position += 1;
           if(position >= song.length) {
               position = 0;
           }
           if(freq) {
               createOscillator(freq);
           }
       }
    }
  render() {
    var surfaceWidth = '400px';
   var surfaceHeight = '400px';
    const positionY = this.state.positionY;
    const positionX = this.state.positionX;
    return (

        <div className="App" onKeyDown={(()=> this.handleKeyDown())} >

          <button onClick={(() => this.handleSong())}>Beep</button>
          <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
            Will it Work
          </Surface>
      </div>

    );
  }
}

export default App;
