import React, { Component } from 'react';
import axios from 'axios';

class AddGame extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      category: "",
      agerestriction: 0,
      price: 99,
    }
  }

  handleChange = ( event ) => {
    let nameITextbox = event.target.value;
    this.setState( { name: nameITextbox } );
  }

  postNewGame = ( event ) => {
    event.preventDefault();
    let newGame = { text: this.state.newText };
    axios.post( "https://localhost:5001/spill", newGame );
  }
  /*
  <label>Game Name: </label>
    <input onChange={this.handleChange} type="text" value={this.state.newText} />
    <input type="submit" value="Lagre spill" />
  <label>Game Name: </label>
    <input onChange={this.handleChange} type="text" value={this.state.newText} />
    <input type="submit" value="Lagre spill" />
  <label>Game Name: </label>
    <input onChange={this.handleChange} type="text" value={this.state.newText} />
    <input type="submit" value="Lagre spill" />
  <label>Game Name: </label>
    <input onChange={this.handleChange} type="text" value={this.state.newText} />
    <input type="submit" value="Lagre spill" />
  */

  render() {
    return (
      <section>
      <form onSubmit={this.postNewGame}>
        <label>
          Game Description:
          <input type="text" name="description" onChange={this.handleChange}/>
        </label>
        <label>
          Game Category:
          <input type="text" name="category" onChange={this.handleChange}/>
        </label>
        <label>
          Game Age Restriction:
          <input type="number" name="agerestriction" onChange={this.handleChange}/>
        </label>
        <label>
          Game Price:
          <input type="number" name="price" onChange={this.handleChange}/>
        </label>
        <button type="submit">Add Game</button>

      </form>
      </section>
    )
  }
}

export default AddGame;
