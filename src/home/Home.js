import React from 'react';
import './Home.css';
import Nav from '../nav/Nav'

/** List component */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

function LocationItem(props) {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={props.name}
          secondary={
            <React.Fragment>
              <Typography
                variant="body2"
                color="textPrimary"
              >
              </Typography>
              {"3014 Walnut St, Philadelphia PA 19104"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </List>
  )
}


function Home() {
  return (
    <div>
      <Nav />
        <div className="Home">
          <input type="text" placeholder="Address location" /> 
          <input type="date" placeholder="Time at location" /> 
          <button class="button default left full"> Search </button>
          <button class="button left full"> Add Location </button>
          <div className="timeline" >
              <LocationItem name="Walmart (07/27/2020)"/>
              <LocationItem name="Drexel University (07/27/2020)"/>
              <LocationItem name="Wawa (07/27/2020)"/>
              <LocationItem name="Target (07/27/2020)"/>
          </div>
        </div>
    </div>
  );
}

export default Home; 
