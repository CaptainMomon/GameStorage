import { combineReducers } from 'redux';
import numberOfGamesReducer from './numberOfGamesReducer';
import gameListReducer from './gameListReducer';

const allReducers = combineReducers(
  {
    numberOfGames: numberOfGamesReducer,
    gameList: gameListReducer
  }
);

export default allReducers;
