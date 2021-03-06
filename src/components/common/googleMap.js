import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MarkerComponent = ({ text }) => <div>{text}</div>

class GoogleMap extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <Container>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCoKWfHbsSmyyM3PUpoEifplwkk2iZihJE' }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 60vh;
`

export default GoogleMap
