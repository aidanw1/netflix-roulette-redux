import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import movieDetailsReducer from "./movieDetailsReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  detailedMovie: movieDetailsReducer,
});

export default rootReducer;
