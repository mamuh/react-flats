import React, { Component } from 'react';

import Flat from './flat.jsx';
import FlatsList from './flats_list.jsx';
// import GoogleMap from './google_map.jsx';
// import Marker from './marker.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    }
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatsList flats={this.state.flats} />
        </div>
        <div className="left-scene">

        </div>
      </div>
    )
  }
}

export default App;
