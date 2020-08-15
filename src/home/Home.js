import React from "react";
import "./Home.css";
import Nav from "../nav/Nav";

/** List component */
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { FaPen } from "react-icons/fa";

/* Function to render a row under track your journey */ 
function LocationItem(props) {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary= {props.date + " | " + props.location}
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
  constructor(props){
    super(props);
    this.state = {
      storage: [], 
      address: '3601 Walnut St, Philadelphia, PA 19104', 

    }
  }

  /* One component mounted, get user current location */ 
  componentDidMount(){
    if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }

  /* Function to add an address, location and people for Add Location button */ 
  addItem(){
    console.log('This is clicked');
  }

  render() {
    return (
      <div>
      <Nav title="Track your journey" subtitle="Record location and people you've met." />
      <div className="Home">
        <input type="text" placeholder="Address location" value={this.state.address} />
        <input type="text" placeholder="People at location" value={this.state.people} />
        <input type="date" value={this.state.date} />
        <button className="button default left full"> Search </button>
        <button className="button left full" onClick={this.addItem}> Add Location </button>
        <div className="timeline">
           {this.state.storage.map(s => 
           <LocationItem date={s.date} location={s.location} people={s.people} />)}
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
