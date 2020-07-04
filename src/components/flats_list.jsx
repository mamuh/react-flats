import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { flats, selectFlat, selectedFlat } = this.props;
    return (
      <div className="flat-list">
        {flats.map(flat => {
          return (
            <Flat
              className="card"
              flat={flat}
              selectFlat={selectFlat}
              selectedFlat={selectedFlat}
            />
          );
        })}
      </div>
    );
  }
}

export default FlatsList;
