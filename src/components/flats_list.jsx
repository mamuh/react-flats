import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const flats = this.props.flats
    return (
      <div className="flat-list">
        {flats.map(flat => {
          return (
            <Flat className="card" name={flat.name} img={flat.imageUrl} price={flat.price} curr={flat.priceCurrency} key={flat.name} />
          );
        })}
      </div>
    );
  }
}

export default FlatsList;
