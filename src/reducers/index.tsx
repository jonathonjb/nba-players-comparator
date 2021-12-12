import { combineReducers } from "redux";
import gamesReducers from "./gamesReducers";
import playersReducer from "./playersReducer";

export default combineReducers({
  players: playersReducer,
  games: gamesReducers
})