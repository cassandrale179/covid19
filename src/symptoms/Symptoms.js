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
    <div className="Symptoms">
      <Nav title="Symptoms" subtitle="Have you experience any of the listed symptoms?"/>
      <div className="symptomsList">
        <SymptomsList title="Fever" />
        <SymptomsList title="Shortness of breath" />
        <SymptomsList title="Muscle or body aches" />
        <SymptomsList title="Headache" />
        <SymptomsList title="Sore throat" />
        <SymptomsList title="Congestion or runny nose" />
      </div>
      <button className="button default full"> Alert my contacts</button>
    </div>
  );
}

export default Symptoms;
