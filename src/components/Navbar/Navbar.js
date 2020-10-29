import React from 'react';
import './Navbar.css';
import { BrowserRouter as  Router, Route, Switch, NavLink } from 'react-router-dom';
import MarketPlace from './MarketPlace';
import Sell from './Sell'
import Community from './Community'
import Develop from './Develop'
import Resources from './Resources';



function Navbar() {
  return (
      <div className="Navbar">
      <div className="Navbar-wrapper">
          <div className="Navbar-left">
            <img src={require('../../images/logo.png')} alt=""/>
          </div>
          <div className="Navbar-middle">
            <Router>
            <NavLink to='/' className="NavLink">Sell</NavLink>
            <NavLink to='/marketplace' className="NavLink">Market Place</NavLink>
            <NavLink to='/community' className="NavLink">Community</NavLink>
            <NavLink to='/develop' className="NavLink">Develop</NavLink>
            <NavLink to='/resources' className="NavLink">Resources</NavLink>
            <Route path='/' component={Sell} />
            <Route path='/marketplace' component={MarketPlace} />
            <Route path='/community' component={Community} />
            <Route path='/develop' component={Develop} />
            <Route path='/resources' component={Resources} />
            </Router>
          </div>
          <div className="Navbar-right">
            <button className="GetStarted">Get Started</button>
            <button className="Login">Log In</button>
          </div>
      </div>
      </div>
  )
}

export default Navbar
