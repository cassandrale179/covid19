import React from "react";
import "./Symptoms.css";
import Nav from "../nav/Nav";

// List Import
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';


function handleToggle(){
    
}

/* Return list of potential symptoms. */ 
function SymptomsList(props){
    return (
        <ListItem button>
            <ListItemText primary={props.title} />
            <ListItemIcon>
              <Checkbox 
                edge="start"
                tabIndex={-1}
                disableRipple
                style ={{color: "#AF7AC5"}} 
              />
            </ListItemIcon>
        </ListItem>
    )
}

function Symptoms() {
  return (
    <div className="Current Status">
      <Nav title="Symptoms" subtitle="Alert your contacts of your current status" />
      <div className="content">
      <img src="https://i.pinimg.com/originals/3b/ae/30/3bae3084e2c8f766575e4863ea35585a.png" />
      <div className="symptomsList">
        <SymptomsList title="No Symptoms" />
        <SymptomsList title="Tested Positive" />
        <SymptomsList title="Show some symptoms" />
      </div>
      <button className="button default full"> Alert my contacts</button>
      </div>
    </div>
  );
}

export default Symptoms;
