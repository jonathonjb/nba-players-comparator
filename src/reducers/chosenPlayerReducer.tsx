import { CHOOSE_PLAYER } from "../actions/types";

const chosenPlayerReducer = (state = {}, action: any) => {
  switch (action.type) {
    case CHOOSE_PLAYER:
      return { ...state, data: action.payload }
    default:
      return state;
  }
}

export default chosenPlayerReducer;