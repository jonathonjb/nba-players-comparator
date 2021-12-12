import { combineReducers } from "redux";
import gamesReducers from "./gamesReducers";
import fetchedPlayersReducer from "./fetchedPlayersReducer";
import chosenPlayerIdReducer from "./chosenPlayerIdReducer";

export default combineReducers({
  fetchedPlayers: fetchedPlayersReducer,
  chosenPlayerId: chosenPlayerIdReducer,
  games: gamesReducers
})