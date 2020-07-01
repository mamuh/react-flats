import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgImg = this.props.img
    return (
      <div className="card" style={{ backgroundImage: `url(${bgImg})` }} >
        <div className="card-category">{this.props.price} {this.props.curr}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}


export default Flat;
