import { SEARCH_PLAYER } from "./types";
import balldontlie from "../apis/balldontlie";

export const searchPlayer = (name: string) => async (dispatch: any) => {
  const response = await balldontlie.get(`/players?search=${name}`);

  dispatch({
    type: SEARCH_PLAYER,
    payload: response.data.data
  })
}