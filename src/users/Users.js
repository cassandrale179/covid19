import React from 'react';
import './Users.css';
import Nav from '../nav/Nav'


function Users() {
  return (
    <div>
      <Nav title="Track people in contact"/>
        <div className="Users">
        <input type="text" placeholder="Add user" />
        <input type="date" />
        <button className="button default left full"> Search </button>
        <button className="button left full"> Add User </button>
        <div className="timeline">
          
      </div>
    </div>
    </div>
  );
}

export default Users; 
