import { GET_MOVIES, MOVIE_LOADED } from "./actions";

const initialState = {
  list: [],
  isLoading: false
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      console.log("reducer");
      return {
        ...state,
        list: action.payload,
        isLoading: true
      };
    case MOVIE_LOADED:
      return {
        ...state,
        list: action.list.data.data.movies,
        isLoading: false
      };
    default:
      return state;
  }
};

export default movieReducer;
