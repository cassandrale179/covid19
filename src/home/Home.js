import React from "react";
import "./Home.css";
import Nav from "../nav/Nav";

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
          primary={props.date + " | " + props.location}
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
    };
    // !IMPORTANT! bind all functions call to recognize this keyword
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePeople = this.handleChangePeople.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  /* One component mounted, get current location */
  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
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

  /* Add address*/
  addItem() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Nav
          title="Track your journey"
          subtitle="Record location and people you've met."
        />
        <div className="Home">
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
          <input type="date" onChange={this.handleChange} />
          <button className="button default left full"> Search </button>
          <button className="button left full" onClick={this.addItem}>
            {" "}
            Add Location{" "}
          </button>
          <div className="timeline">
            {this.state.storage.map((s) => (
              <LocationItem
                date={s.date}
                location={s.location}
                people={s.people}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
