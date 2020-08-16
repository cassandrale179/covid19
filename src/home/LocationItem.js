import React from "react";
import Nav from "../nav/Nav";

/** List component */
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { FaPen, FaThinkPeaks } from "react-icons/fa";

/* Function to render a row under track your journey */
export default function LocationItem(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
  
         {/* Starting of a dialog component for each list */} 
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Edit your location"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Edit your information below. Or you can delete it by clicking delete.
            </DialogContentText>
            <TextField margin="dense" id="location" label="Address" type="text" fullWidth />
            <TextField margin="dense" id="people" label="People" type="text" fullWidth />
            <TextField margin="dense" id="date" type="date" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Save
            </Button>
          </DialogActions>
        </Dialog>
  
        {/* Starting of a list component */}
        <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={props.date + " | " + props.address}
            secondary={
              <React.Fragment>
                <Typography variant="body2" color="textPrimary">
                People met: {props.people}
                </Typography>
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments">
              <FaPen className="icon" onClick={handleClickOpen}/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider component="li" />
      </List>
      </div>
    );
  }