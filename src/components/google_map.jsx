import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const MarkerComponent = ({ text }) => <div><img src={text} width="30px" /></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container" style={{ height: '96vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDN2KvIJsVkxYiPpo0SCM4pnMCBsIn4QFw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerComponent
            lat={59.955413}
            lng={30.337844}
            text="https://i.pinimg.com/originals/25/62/aa/2562aacd1a4c2af60cce9629b1e05cf2.png"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
