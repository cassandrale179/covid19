import React, { useState, useEffect, useRef } from 'react';
import "./Home.css";
import Nav from "../nav/Nav";
import Geocode from "react-geocode";

import LocationItem from './LocationItem';
import  AutoCompleteAddressForm from './AutoCompleteAddressForm';

/* Navigate to given page */ 
function navigate(location) {
  window.location.href = `/${location}`;
}

// /* Main default class home */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: [],
      address: "",
      people: "",
      date: "",
      errorMessage: "",
    };
    // !IMPORTANT! bind all functions call to recognize this keyword
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePeople = this.handleChangePeople.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.setDefaultAddress = this.setDefaultAddress.bind(this);
    this.storeItem= this.storeItem.bind(this); 
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    // Load any prior stored address in local storage
    Geocode.setApiKey("AIzaSyDjrq68D6YESU7xYbaqIElmuOjFBVqJ3Rc"); 
    const localAddress =  window.localStorage.getItem("storage"); 
    if (localAddress){
      this.setState({
        storage: JSON.parse(localAddress)
      })
    }
    // Get user current position as defualt address
    const success = position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.setDefaultAddress(latitude, longitude);
    };
    const error = () => {
      console.log("Unable to retrieve your location");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }
  /* Set user default address based on their latitude and longitude */ 
  setDefaultAddress(latitude, longitude){
    Geocode.fromLatLng(latitude, longitude).then(
      response => {
        const a = response.results[0].formatted_address;
        this.setState({
          address: a
        })
      },
      error => {
        console.error(error);
      });
  }
  /* Handlers for input forms */ 
  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }
  handleChangePeople(event) {
    this.setState({ people: event.target.value });
  }
  handleChangeDate(event) {
    this.setState({ date: event.target.value });
  }
  /* Store address item in local storage */ 
  storeItem(key, val){
    window.localStorage.setItem(key, JSON.stringify(val));
  }
  /* Add item to lists below input */ 
  addItem() {
    if (this.state.address && this.state.date) {
      const locationItem = {
        address: this.state.address,
        date: this.state.date,
      };
      const joined = this.state.storage.concat(locationItem);
      this.setState({
        storage: joined,
        errorMessage: "",
      }, function(){
        this.storeItem("storage", this.state.storage);
      });
    } else {
      const error = "Please fill in the address and date in the input";
      this.setState({ errorMessage: error });
    }
  }

  render() {
    const locationItems = this.state.storage.map((v) => {
      return (
        <LocationItem
          key={v.address}
          address={v.address}
          date={v.date}
        />
      );
    });

    return (
      <div>
        <Nav
          title="Track your journey"
          subtitle="Record location and people you've met."
        />
        <div className="Home">
         <AutoCompleteAddressForm  />
          <input type="date" onChange={this.handleChangeDate} />
          <button className="button left full" onClick={() => navigate("map")}> Visualize </button>
          <button className="button default left full" onClick={this.addItem}>
            Add Location
          </button>
          <div className="timeline">{locationItems}</div>
        </div>
      </div>
    );
  }
}

export default Home;