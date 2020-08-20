import React from 'react';
import './Users.css';
import Nav from '../nav/Nav'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { UserData } from '../fakeData';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

function handleClick(event){
  // event.target.style.backgroundColor = 'black';
}

function UserList(props){
  const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const setColor = (status) => {
      if (status == "Tested Positive")
      return "#bf360c";
      else if (status == "No Symptoms")
      return "#2e7d32";
      else if (status == "Show Symptoms")
      return "#ffc107";
    }

  return (
     <div>
     <Dialog
     open={open}
     onClose={handleClose}
     aria-labelledby="alert-dialog-title"
     aria-describedby="alert-dialog-description"
   >
     <DialogTitle id="alert-dialog-title">{" View User Information"}</DialogTitle>
     <DialogContent dividers>
          <Typography gutterBottom>
            <b> Name: </b> {props.name} <br />
            <b> Status: </b> {props.status} <br />
            <b> Visited: </b> {props.location} <br />
            <b> Last Updated:</b> {props.updated} <br />
          </Typography>

     </DialogContent>
     <DialogActions>
       <Button onClick={handleClose} color="primary">
         Close
       </Button>
     </DialogActions>
    </Dialog>

      <ListItem alignItems="flex-start" onClick={handleClickOpen}>
        <ListItemAvatar>
          <Avatar src={props.image} />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style ={{color: setColor(props.status)}} 
              >
                {props.status}
              </Typography>
              {" — Status updated: …"}
            </React.Fragment>
          }
        />
      </ListItem>
      </div>
  );
}

function Users() {
  return (
    <div>
      <Nav title="Contacts" subtitle="Receive alerts about your contacts."/>
        <div className="Users">
        <input type="text" placeholder="Search for users..." />
          <div className="userContent">
          <div className="users">
            {UserData.map(user => {
              return <UserList name={user.name} status={user.status} image={user.avatar} updated={user.last_updated} location={user.address} color={"#ef6c00"} />
            })}
          </div>
      </div>
    </div>
    </div>
  );
}

export default Users; 