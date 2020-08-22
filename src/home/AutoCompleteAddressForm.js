import React, { useState, useEffect, useRef } from 'react';

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateAddress, autoCompleteRef) {
  let autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["geocode"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address", "geometry"]);
  autoComplete.addListener("place_changed", () =>{

    // Parse data from the Google Maps API object 
    const addressObject = autoComplete.getPlace();
    const address = addressObject.formatted_address;
    let zipCode = ''; 
    if (addressObject.address_components[7]){
      zipCode = addressObject.address_components[7].long_name; 
    } 
    const lat = addressObject.geometry.location.lat();
    const lng = addressObject.geometry.location.lng();
    console.log(lat, lng);

      // Add in data to the window storage objects 
    window.localStorage.setItem('latlngStorage', JSON.stringify([lat, lng])); 
    window.localStorage.setItem('zipCodeStorage', zipCode);
    window.localStorage.setItem('addressStorage', address);

    // Update automated value onto input form
    updateAddress(address);
  });
}

export default function AutoCompleteAddressForm(props) {
  const [address, setAddress] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjrq68D6YESU7xYbaqIElmuOjFBVqJ3Rc&libraries=geometry,places`,
      () => handleScriptLoad(setAddress, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setAddress(event.target.value)}
        placeholder="Enter a location"
        value={address}
      />
    </div>
  );
}
