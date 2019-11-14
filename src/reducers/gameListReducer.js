const gameListReducer = (state = ["Dark Souls", "World of Warcraft", "Shrek the Game"], action) => {
  switch (action.type) {
    case "ADD_GAME":
      const games = state.map( game => game);
      games.push(action.newGame);
      return games;
    default:
      return state;

  }
}
export default gameListReducer;
