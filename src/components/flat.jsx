import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { selectFlat, flat } = this.props;
    selectFlat(flat);
  }

  render() {
    const { selectedFlat, selectFlat, flat } = this.props;
    const { name, imageUrl, price, priceCurrency } = flat;
    const isSelected = (flat === selectedFlat);

    return (
      <div className={isSelected ? "active card" : " card"} style={{ backgroundImage: `url(${imageUrl})` }} onClick={this.handleClick} >
        <div className="card-category">{price} {priceCurrency}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}


export default Flat;
