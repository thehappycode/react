import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import { Home, Rooms, SingleRoom, Error } from './pages';
import { Navbar } from './components'


function App() {
  return (
    <>
    <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
    </>
  );
}

export default App;
