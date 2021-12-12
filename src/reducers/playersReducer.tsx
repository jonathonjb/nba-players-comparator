import { SEARCH_PLAYER } from "../actions/types"

const playersReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SEARCH_PLAYER:
      return { ...state, list: action.payload }
    default:
      return state;
  }
}

export default playersReducer;