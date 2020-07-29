import React from "react";
import "./Nav.css";
import {
  FaMapMarker,
  FaUser,
  FaAlignJustify,
  FaTemperatureHigh,
} from "react-icons/fa";

/* Navigate to given page */ 
function navigate(location) {
  window.location.href = `/${location}`;
}

/* Renders the top and bottom navigation bar */ 
function Nav(props) {
  return (
    <div>
      <div className="topNav">
        <h4>{props.title}</h4>
        <h5> {props.subtitle}</h5>
      </div>
      <div className="bottomNav">
        <div onClick={() => navigate("home")} className="page">
          <FaMapMarker />
          <label>Track</label>{" "}
        </div>
        <div onClick={() => navigate("users")} className="page">
          <FaUser />
          <label>Contacts</label>
        </div>
        <div onClick={() => navigate("symptoms")} className="page">
          <FaTemperatureHigh />
          <label>Symptoms</label>
        </div>
        <div onClick={() => navigate("settings")} className="page">
          <FaAlignJustify />
          <label>Settings</label>
        </div>
      </div>
    </div>
  );
}

export default Nav;
