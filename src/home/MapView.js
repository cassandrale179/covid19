import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Nav from "../nav/Nav";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export default class MapView extends Component {
  static defaultProps = {
    center: {
      lat: 39.95,
      lng: -75.19,
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <Nav/> 
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDjrq68D6YESU7xYbaqIElmuOjFBVqJ3Rc" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
             lat={39.95}
             lng={-75.19}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
