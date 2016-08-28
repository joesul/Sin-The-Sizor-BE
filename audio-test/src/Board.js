import React, { Component, PropTypes } from 'react';
import Square from './Square';
import Knight from './Knight';

let yaxis;

class Board extends Component {


  constructor(props) {
    super(props);
    // this.state = {
    //   positionX: 0,
    //   positionY: 0
    // }
    console.log(props,"pimp")
  }

  renderSquare(i) {
    console.log(this.props);
    let coords = this.props
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    // const [knightX, knightY] = #############;
    const piece = (x === coords.xcoords && y === yaxis) ?
      <Knight /> :
      null;

      setInterval(function(){
        // console.log("hallo", coords.ycoords);
        // this.props.ycoords = coords.ycoords++
        yaxis = coords.ycoords
        yaxis =+1
        console.log("Da Y", yaxis)

        return yaxis
      }, 1000)

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }



  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        border: 'solid red 2px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}
//
// Board.propTypes = {
//   knightPosition: PropTypes.arrayOf(
//     PropTypes.number.isRequired
//   ).isRequired
// };
export default Board
