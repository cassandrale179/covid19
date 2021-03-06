import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home'; 
import Users from './users/Users'; 
import Symptoms from './symptoms/Symptoms';
import Settings from './settings/Settings';
import Map from './home/MapView'; 

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} exact /> 
        <Route path="/users" component={Users} exact /> 
        <Route path="/symptoms" component={Symptoms} exact /> 
        <Route path="/settings" component={Settings} exact />  
        <Route path="/map" component={Map} exact />   
      </Switch>
    </main>
  );
}
export default App;