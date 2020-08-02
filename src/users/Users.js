import React from 'react';
import './Users.css';
import Nav from '../nav/Nav'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function handleClick(event){
  // event.target.style.backgroundColor = 'black';
}

function UserList(props){
  return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="'../static/pic1.png'" />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {props.status}
              </Typography>
              {" — Status updated: …"}
            </React.Fragment>
          }
        />
      </ListItem>
  );
}

function Users() {
  return (
    <div>
      <Nav title="Contacts" subtitle="Receive alerts about your contacts."/>
        <div className="Users">
        <div className="content">
          <input type="text" placeholder="Search for users..." />
          <div className="chipDiv">
              <button className="chip"> Tested Positive </button>
              <button className="chip"> Show Symptoms </button>
          </div>
          <UserList name="Ali" status="Tested positive"/>
          <UserList name="Britney" status="Show symptoms"/>
          <UserList name="Casey"  status="Tested negative"/>
          <UserList name="Danny" status="Show symptoms"/>
      </div>
    </div>
    </div>
  );
}

export default Users; 