import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AddGame from './AddGame';
import DeleteGame from './DeleteGame'

class Nav extends Component {
  render(){
    return (
      <BrowserRouter>
      <nav class="navbar fixed-top navbar-dark  navbar-expand-md">
          <a class="navbar-brand" href="#">Game Storage</a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto text-right">
              <li class="nav-item"><Link to="/"> Home </Link></li>
              <li class="nav-item"><Link to="/AddGame"> Add Game </Link></li>
              <li class="nav-item"><Link to="/DeleteGame"> Delete Game </Link></li>
            </ul>
          </div>
        </nav>

      <Header title="GameStorage" />


      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AddGame" component={AddGame} />
        <Route path="/DeleteGame" component={DeleteGame} />
      </Switch>
      </BrowserRouter>
    )
  }
}
export default Nav;
