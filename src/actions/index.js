export const addGame = ( newGame ) => {
    return {
      type: "ADD_GAME",
      newGame
    }
}

export const incrementGame = () => {
  return {
    type: "INCREMENT_GAME"
  }
}
