import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  INIT_MOVIE_DETAILS,
  FETCH_MOVIES,
  FETCH_SEARCHED_MOVIES,
  FETCH_SORTED_MOVIES,
} from "../actionTypes/movieActionTypes";

import {
  SORT_BY_RUNTIME,
  SORT_BY_TITLE,
  SORT_BY_RELEASE_DATE,
  SORT_BY_RATING,
} from "../actionTypes/sortActionTypes";

import { SHOW_LOADER, HIDE_LOADER } from "../actionTypes/loaderActionTypes";

const addMovieCreator = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

const deleteMovieCreator = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});

const editMovieCreator = (movie) => ({
  type: EDIT_MOVIE,
  payload: movie,
});

const getMovieDetailsCreator = (details) => ({
  type: INIT_MOVIE_DETAILS,
  payload: details,
});

const loadMoviesCreator = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});

const fetchSearchedMoviesCreator = (searchedMovies) => ({
  type: FETCH_SEARCHED_MOVIES,
  payload: searchedMovies,
});

const fetchSortedMoviesCreator = (movie_genre) => ({
  type: FETCH_SORTED_MOVIES,
  payload: movie_genre,
});

const sortMoviesByTitleCreator = (movies) => ({
  type: SORT_BY_TITLE,
  payload: movies,
});

const sortMoviesByRuntimeCreator = (movies) => ({
  type: SORT_BY_TITLE,
  payload: movies,
});

const sortMoviesByRatingCreator = (movies) => ({
  type: SORT_BY_RATING,
  payload: movies,
});

const sortMoviesByReleaseDateCreator = (movies) => ({
  type: SORT_BY_RELEASE_DATE,
  payload: movies,
});

const showLoaderCreator = () => ({
  type: SHOW_LOADER,
});

const hideLoaderCreator = () => ({
  type: HIDE_LOADER,
});

export {
  addMovieCreator,
  deleteMovieCreator,
  editMovieCreator,
  getMovieDetailsCreator,
  loadMoviesCreator,
  fetchSearchedMoviesCreator,
  fetchSortedMoviesCreator,
  sortMoviesByTitleCreator,
  sortMoviesByRuntimeCreator,
  sortMoviesByRatingCreator,
  sortMoviesByReleaseDateCreator,
  showLoaderCreator,
  hideLoaderCreator,
};
