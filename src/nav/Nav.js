import React from 'react';
import './Nav.css'
import { FaMapMarker } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaAlignJustify} from 'react-icons/fa';


function Nav() {
  return (
    <div>
      <div className="topNav">
          <h4>Track your recent location</h4>
      </div>
      <div className="bottomNav">
          <div className="page"> <FaMapMarker /> 
            <label>Map</label> </div>
          <div className="page"> <FaUser /> 
             <label>Users</label> 
          </div> 
          <div className="page"> <FaHome /> </div>  
          <div className="page"> <FaAlignJustify /></div> 
      </div>
    </div>
  );
}

export default Nav;
