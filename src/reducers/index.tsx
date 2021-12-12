import { combineReducers } from "redux";
import gamesReducers from "./gamesReducers";
import fetchedPlayersReducer from "./fetchedPlayersReducer";
import chosenPlayerReducer from "./chosenPlayerReducer";

export default combineReducers({
  fetchedPlayers: fetchedPlayersReducer,
  chosenPlayer: chosenPlayerReducer,
  games: gamesReducers
})