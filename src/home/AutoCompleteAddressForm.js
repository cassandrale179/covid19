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
  const latlngStorage = window.localStorage.getItem('latlngStorage'); 
  const zipCodeStorage = window.localStorage.getItem('zipCodeStorage');
  if (!latlngStorage){
    window.localStorage.setItem('latlngStorage', JSON.stringify([]));
  }
  if (!zipCodeStorage){
    window.localStorage.setItem('zipCodeStorage', JSON.stringify([]));
  }
  console.log(window.localStorage);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  let autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["geocode"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address", "geometry"]);
  autoComplete.addListener("place_changed", () =>{
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    let zipCode; 
    if (addressObject.address_components[7]){
      zipCode = addressObject.address_components[7].long_name; 
    }
    const lat = addressObject.geometry.location.lat();
    const lng = addressObject.geometry.location.lng();

    let latlngStorage = JSON.parse(window.localStorage.getItem('latlngStorage')); 
    let zipCodeStorage = JSON.parse(window.localStorage.getItem('zipCodeStorage'));
    latlngStorage.push([lat, lng]);
    if (zipCode && !zipCodeStorage.includes(zipCode)){
      zipCodeStorage.push(zipCode);
    }
    window.localStorage.setItem('latlngStorage', JSON.stringify(latlngStorage)); 
    window.localStorage.setItem('zipCodeStorage', JSON.stringify(zipCodeStorage));
    console.log(window.localStorage); 
    updateQuery(query);
  });
}

export default function AutoCompleteAddressForm(props) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjrq68D6YESU7xYbaqIElmuOjFBVqJ3Rc&libraries=geometry,places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a location"
        value={query}
      />
    </div>
  );
}
