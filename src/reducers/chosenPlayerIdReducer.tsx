import { CHOOSE_PLAYER_ID } from "../actions/types";

const chosenPlayerIdReducer = (state = {}, action: any) => {
  switch (action.type) {
    case CHOOSE_PLAYER_ID:
      return { ...state, id: action.payload }
    default:
      return state;
  }
}

export default chosenPlayerIdReducer;