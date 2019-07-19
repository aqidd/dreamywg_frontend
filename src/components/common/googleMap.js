import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const MarkerComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCoKWfHbsSmyyM3PUpoEifplwkk2iZihJE' }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;