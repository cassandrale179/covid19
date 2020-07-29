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

function LocationItem(props) {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.name}
          secondary={
            <React.Fragment>
              <Typography variant="body2" color="textPrimary"></Typography>
              {"People met: Abigail"}
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

function Home() {
  return (
    <div>
      <Nav title="Track your journey" subtitle="Record location and people you've met." />
      <div className="Home">
        <input type="text" placeholder="Address location" />
        <input type="text" placeholder="People at location" />
        <input type="date" />
        <button className="button default left full"> Search </button>
        <button className="button left full"> Add Location </button>
        <div className="timeline">
          <LocationItem name="07/27/2020 - Walmart" />
          <LocationItem name="07/25/2020 - Drexel University" />
          <LocationItem name="07/25/2020 - Wawa" />
        </div>
      </div>
    </div>
  );
}

export default Home;
