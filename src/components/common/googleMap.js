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
          bootstrapURLKeys={{ key: 'AIzaSyBPLTJT4_5icxwmLgW8YyXvN7BdTprCPj4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerComponent
            lat={61.955413}
            lng={110.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;