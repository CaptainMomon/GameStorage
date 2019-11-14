import React, { Component } from 'react';
import axios from 'axios';

class GameList extends Component {
  state = {
    games: [],
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/spill`).then(res => {
        this.setState({games: res.data});
      });
  }

  render() {
    return (
      <ol>
      {this.state.games.map(games =>
        <li key={games.id}>Name: {games.name} | Description : {games.description} | Category :{games.category} |
         Age Restriction : {games.ageRestriction} | Price : {games.price} </li>)}
      </ol>
    )
  }
}

export default GameList;
