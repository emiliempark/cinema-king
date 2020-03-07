export const GET_MOVIES = "@Movies/GET_MOVIES";
export const MOVIE_LOADED = "@Movies/MOVIE_LOADED";

export function getMovies() {
  return {
    type: GET_MOVIES
  };
}

export function movieLoaded(LIST) {
  return {
    type: MOVIE_LOADED,
    payload: LIST
  };
}
