import { all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET_MOVIES, MOVIE_LOADED } from "../src/containers/Movies/actions";

export function* fetchMovies() {
  try {
    const url =
      "https://virtserver.swaggerhub.com/narrative-software/sci-fi-movie-api/1.0.0/movies";
    const apiData = yield call(axios.get, url);
    // console.log(apiData);
    yield put({ type: MOVIE_LOADED, list: apiData });
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetMovieList() {
  yield takeLatest(GET_MOVIES, fetchMovies);
}

export default function* rootSaga() {
  console.log("saga load");
  yield all([watchGetMovieList()]);
}
