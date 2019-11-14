import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/AddGame';
import Contact from './Components/DeleteGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import GameList from './Components/GameList';
import GetGameButton from './Components/GetGameButton';
import AddGame from './Components/AddGame';
import Nav from './Components/Nav';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true}
  }

  triggerGetGameState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isGetGameState: true
    })
  }
  render() {
    return (
      <div className="App">

        <Nav />

        <GetGameButton getGames={this.triggerGetGameState} />

        {this.state.isGetGameState && <GameList />}

      </div>
    );
  }
}


export default App;
