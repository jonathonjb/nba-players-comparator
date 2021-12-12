import { SEARCH_PLAYER } from "./types";
import balldontlie from "../apis/balldontlie";

export const searchPlayer = (name: string) => async (dispatch: any) => {
  const response = await balldontlie.get(`/${name}`);

  console.log(searchPlayer);

  dispatch({
    type: SEARCH_PLAYER,
    payload: response
  })
}