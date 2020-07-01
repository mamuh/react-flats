import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flat-card">
        <img src={this.props.img} />
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}


export default Flat;
