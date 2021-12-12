import { FETCH_PLAYER_GAMES } from "../actions/types";


const gamesReducers = (state = {}, action: any) => {
  switch (action.type) {
    case FETCH_PLAYER_GAMES:
      return { ...state, data: action.payload }
    default:
      return state;
  }
}

export default gamesReducers;