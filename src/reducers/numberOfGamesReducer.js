const numberOfGamesReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_GAME":
      return state + 1;
    case "DECREMENT_GAME":
      return state - 1;
    default:
      return state;
  }
}

export default numberOfGamesReducer;
