import React from 'react';
import GoogleMapReact from 'google-map-react';
import Nav from "../nav/Nav";

const MapView = ({ latitude, longitude }) => {
    const renderMarkers = (map, maps) => {
        let markers = [];
        const storage = window.localStorage.getItem('storage');
        if (storage){
           const storageValue = JSON.parse(storage);
           storageValue.forEach(v => {
               const lat = JSON.parse(v.latlng)[0];
               const lng = JSON.parse(v.latlng)[1];
               let marker = new maps.Marker({
                    position: { lat: lat, lng: lng},
                    map,
                });
                
           })
        }
    return markers;
    };

 return (
   <div style={{ height: '100vh', width: '100%' }}>
    <Nav/> 
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDjrq68D6YESU7xYbaqIElmuOjFBVqJ3Rc" }}
      defaultCenter={{ lat: 39.95, lng: -75.19 }}
      defaultZoom={13}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => {
          renderMarkers(map, maps);
    }}
    >
    </GoogleMapReact>
   </div>
 );
};

export default MapView;

