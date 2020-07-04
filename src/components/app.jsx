import React, { Component } from 'react';

import Flat from './flat.jsx';
import FlatsList from './flats_list.jsx';
import SimpleMap from './google_map.jsx';
// import Marker from './marker.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    }
  }

  selectFlat = selectedFlat => {
    this.setState({
      selectedFlat
    })
  }

  render() {
    return (
      <div>
        <FlatsList flats={flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat} />
        <SimpleMap selectedFlat={this.state.selectedFlat} />
      </div>
    )
  }
}

export default App;
