import axios from "../../helpers/axiosHelper";
import {
  FETCH_MOVIES,
  INIT_MOVIE_DETAILS,
  FETCH_SEARCHED_MOVIES,
  FETCH_SORTED_MOVIES,
  INIT_FETCH_MOVIES,
  SORT_BY_TITLE,
  SORT_BY_RATING,
  SORT_BY_RELEASE_DATE,
  SHOW_LOADER,
  HIDE_LOADER,
} from "./constants";

export const loadMovies = () => async (dispatch) => {
  //FETCH AXIOS
  const allMoviesData = await axios.get("/movies?limit=12");

  dispatch({
    type: FETCH_MOVIES,
    payload: allMoviesData.data.data,
  });

  // dispatch({
  //   type: "DELETE_MOVIES",
  //   payload: {
  //     deleteMovieData,
  //   },
  // });
};

export const fetchSearch = (movie_name) => async (dispatch) => {
  dispatch({
    type: INIT_MOVIE_DETAILS,
  });
  const searchMovieData = await axios.get(
    `/movies?search=${movie_name}&searchBy=title`
  );

  // console.log(searchMovieData.data);

  dispatch({
    type: FETCH_SEARCHED_MOVIES,
    payload: searchMovieData.data.data,
  });
};

export const fetchSorted = (movie_genre) => async (dispatch) => {
  dispatch({
    type: INIT_FETCH_MOVIES,
  });
  const sortedMoviesData = await axios.get(
    `/movies?limit=100&searchBy=genres&filter=${movie_genre}`
  );

  // console.log(sortedMoviesData);

  dispatch({
    type: FETCH_SORTED_MOVIES,
    payload: sortedMoviesData.data.data,
  });
};

export const sortByTitle = (movies) => async (dispatch) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    //first argument should appear before second argument
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    //first argument should appear after second argument
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    // if equal return zero
    return 0;
  });

  dispatch({
    type: SORT_BY_TITLE,
    payload: sortedMoviesData,
  });
};

export const sortByRuntime = (movies) => async (dispatch) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    //if b is larger than a returns negative number - which means a should come before it
    return b.runtime - a.runtime;
  });

  dispatch({
    type: SORT_BY_TITLE,
    payload: sortedMoviesData,
  });
};

export const sortByRating = (movies) => async (dispatch) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    //if b is larger than a returns negative number - which means a should come before it
    return b.vote_average - a.vote_average;
  });

  dispatch({
    type: SORT_BY_RATING,
    payload: sortedMoviesData,
  });
};

export const sortByReleaseDate = (movies) => async (dispatch) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    var dateA = new Date(a.release_date),
      dateB = new Date(b.release_date);
    return dateB - dateA;
  });

  dispatch({
    type: SORT_BY_RELEASE_DATE,
    payload: sortedMoviesData,
  });
};

export const showLoader = () => async (dispatch) => {
  dispatch({
    type: SHOW_LOADER,
  });
};

export const hideLoader = () => async (dispatch) => {
  dispatch({
    type: HIDE_LOADER,
  });
};
