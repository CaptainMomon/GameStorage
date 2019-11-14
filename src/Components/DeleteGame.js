
import React, { Component } from 'react';
import axios from 'axios';

class DeleteGame extends Component {
  state = {
    id: 0,

  };

  handleChange = event => {
    this.setState({ id: event.target.value});

  }

  handleSubmit = event => {
    event.preventDefault();

    axios
      .delete(`https://localhost:5001/spill/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Game Id:
          <input type="number" name="id" onChange={this.handleChange}/>
        </label>
        <button type="submit">Delete Game</button>
      </form>
    )
  }
}

export default DeleteGame;
