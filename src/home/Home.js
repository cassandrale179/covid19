import React from "react";
import "./Home.css";
import Nav from "../nav/Nav";
import Geocode from "react-geocode";

/** List component */
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";


import { FaPen } from "react-icons/fa";

/* Function to render a row under track your journey */
function LocationItem(props) {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.date + " | " + props.address}
          secondary={
            <React.Fragment>
              <Typography variant="body2" color="textPrimary"></Typography>
              People met: {props.people}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <FaPen className="icon" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
    </List>
  );
}

/* Main default class home */
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

  /* One component mounted, get current location */
  componentDidMount() {
    console.log(window.localStorage); 
    const localAddress =  window.localStorage.getItem("storage"); 
    if (localAddress){
      this.setState({
        storage: JSON.parse(localAddress)
      })
    }

    // Get API key 
    Geocode.setApiKey("AIzaSyDjrq68D6YESU7xYbaqIElmuOjFBVqJ3Rc"); 
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

  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  handleChangePeople(event) {
    this.setState({ people: event.target.value });
  }

  handleChangeDate(event) {
    this.setState({ date: event.target.value });
  }
  
  storeItem(key, val){
    window.localStorage.setItem(key, JSON.stringify(val));
  }

  /* Add address*/
  addItem() {
    if (this.state.address && this.state.date) {
      const locationItem = {
        address: this.state.address,
        people: this.state.people,
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
          people={v.people}
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
          <div className="errorMessage">{this.state.errorMessage}</div>
          <input
            type="text"
            placeholder="Address location"
            value={this.state.address}
            onChange={this.handleChangeAddress}
          />
          <input
            type="text"
            placeholder="People at location"
            defaultValue={this.state.people}
            onChange={this.handleChangePeople}
          />
          <input type="date" onChange={this.handleChangeDate} />
          <button className="button default left full"> Search </button>
          <button className="button left full" onClick={this.addItem}>
            {" "}
            Add Location{" "}
          </button>
          <div className="timeline">{locationItems}</div>
        </div>
      </div>
    );
  }
}

export default Home;
