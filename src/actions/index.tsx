import { CHOOSE_PLAYER, FETCH_PLAYER_GAMES, SEARCH_PLAYER } from "./types";
import balldontlie from "../apis/balldontlie";

export const choosePlayer = (player: Object) => {
  return {
    type: CHOOSE_PLAYER,
    payload: player
  }
}

export const searchPlayer = (name: string) => async (dispatch: any) => {
  const response = await balldontlie.get(`/players?search=${name}`);

  dispatch({
    type: SEARCH_PLAYER,
    payload: response.data.data
  })
}

export const fetchPlayerGames = (id: number) => async (dispatch: any) => {
  let response: any = await balldontlie.get(`/stats?player_ids[]=${id}&per_page=100/`)
  let games: any = response.data.data;
  for (let page = 2; page <= response.data.meta.total_pages; page += 1) {
    let response: any = await balldontlie.get(`/stats?player_ids[]=${id}&per_page=1000&page=${page}`)
    games = games.concat(response.data.data);
  }


  dispatch({
    type: FETCH_PLAYER_GAMES,
    payload: games
  })
}