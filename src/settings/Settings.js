import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "./Settings.css";
import Nav from "../nav/Nav";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


// Icon list
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AdjustIcon from '@material-ui/icons/Adjust';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SecurityIcon from '@material-ui/icons/Security';
import AnnouncementIcon from '@material-ui/icons/Announcement'; 
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LockIcon from '@material-ui/icons/Lock';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FindInPageIcon from '@material-ui/icons/FindInPage';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="listContent">
    <List
      component="nav"
      aria-labelledby="nested-list-subheader">
      <ListItem button><ListItemIcon><AccountCircleIcon /></ListItemIcon><ListItemText primary="Account" /></ListItem>
      <ListItem button><ListItemIcon><NotificationsIcon /></ListItemIcon><ListItemText primary="Notifications" /></ListItem>
      <ListItem button><ListItemIcon><LockIcon /></ListItemIcon><ListItemText primary="Privacy" /></ListItem>
      <ListItem button onClick={handleClick}><ListItemIcon><FindInPageIcon/></ListItemIcon><ListItemText primary="Resources" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button><ListItemIcon className={classes.nested}>
            <AdjustIcon /></ListItemIcon><ListItemText primary="Testing Sites"/>
          </ListItem>
          <ListItem button><ListItemIcon className={classes.nested}>
            <LocalHospitalIcon /></ListItemIcon><ListItemText primary="Healthcare Provider"/>
          </ListItem>
          <ListItem button><ListItemIcon className={classes.nested}>
           <AnnouncementIcon/></ListItemIcon><ListItemText primary="News"/>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button><ListItemIcon><SecurityIcon /></ListItemIcon><ListItemText primary="Security" /></ListItem>
      <ListItem button><ListItemIcon><ExitToAppIcon /></ListItemIcon> <ListItemText primary="Log Out" /></ListItem>
    </List>
    </div>
  );
}


export default function Settings() {
  return (
    <div>
       <Nav title="Settings" subtitle="Customize Your Profile Here" />
       <div className="settingsContent">
          <NestedList />
       </div>
    </div>
  );
}