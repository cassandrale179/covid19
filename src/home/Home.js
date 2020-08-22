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
      date: "",
      errorMessage: "",
    };
    // !IMPORTANT! bind all functions call to recognize this keyword
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    if (!window.localStorage.getItem('storage')){
      window.localStorage.setItem('storage', JSON.stringify([]));
    }
    console.log('componentDidMount', window.localStorage);
  }
 
  /* Handlers for input forms */ 
  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }
 
  handleChangeDate(event) {
    this.setState({ date: event.target.value });
  }
  
  /* Add item to lists below input */ 
  addItem() {
    if (!this.state.date){
      this.setState({ date: '08/21/2020' });
    } 
    window.localStorage.setItem('dateStorage', this.state.date);
    this.setState({date: ''});
    this.createItemArrayObject();
  }

  createItemArrayObject(){
    let storage = JSON.parse(window.localStorage.getItem('storage'));
    const object = {
      'address': window.localStorage.getItem('addressStorage'),
      'zipcode': window.localStorage.getItem('zipCodeStorage'),
      'latlng': window.localStorage.getItem('latlngStorage'),
      'date': window.localStorage.getItem('dateStorage'), 
    }
    storage.push(object);
    window.localStorage.setItem('storage', JSON.stringify(storage));
    let keysToRemove = ['addressStorage', 'zipCodeStorage', 'latlngStorage', 'dateStorage']; 
    for (let key of keysToRemove) {
      window.localStorage.removeItem(key);
    } 
    console.log(window.localStorage);
  }

  render() {
    // const locationItems = this.state.storage.map((v) => {
    //   return (
    //     <LocationItem
    //       key={v.address}
    //       address={v.address}
    //       date={v.date}
    //     />
    //   );
    // });

    return (
      <div>
        <Nav
          title="Track your journey"
          subtitle="Record location and people you've met."
        />
        <div className="Home">
         <AutoCompleteAddressForm />
          <input type="date" onChange={this.handleChangeDate} />
          <button className="button left full" onClick={() => navigate("map")}> Visualize </button>
          <button className="button default left full" onClick={this.addItem}>
            Add Location
          </button>
          {/* <div className="timeline">{locationItems}</div> */}
        </div>
      </div>
    );
  }
}

export default Home;