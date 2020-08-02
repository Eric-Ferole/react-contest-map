import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// Components
import Marker from '../Marker/Marker';

// Style 
import './Map.scss';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 47.248539,
      lng: -68.027853
    },
    zoom: 6
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="Map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBBzh2Hty-C-mhUwY5RCi11hu1TJG-oSxY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.candidatures.map(candidat => {
            return(
              <Marker
                lat={candidat.lat}
                lng={candidat.long}
                text="My Marker"
                key={candidat.titre}
              />
            )
          })}
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
