import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'white' : 'black';
    const stroke = black ? 'black' : 'white';

    return (
      <div style={{
        border: 'solid black 1px',
        backgroundColor: 'white',
        color: stroke,
        width: '100%',
        height: '100%'
      }}>
        {this.props.children}
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
