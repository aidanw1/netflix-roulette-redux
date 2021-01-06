import axios from "axios";

export const loadMovies = () => async (dispatch) => {
  //FETCH AXIOS
  const allMoviesData = await axios.get(
    "http://localhost:4000/movies?limit=12"
  );
  // const deleteMovieData = await axios.delete(
  //   `http://localhost:4000/movies/${id}`
  // );
  // console.log(allMoviesData.data.data);

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      allMovies: allMoviesData.data.data,
    },
  });

  // dispatch({
  //   type: "DELETE_MOVIES",
  //   payload: {
  //     deleteMovieData,
  //   },
  // });
};

export const fetchSearch = (movie_name) => async (dispatch) => {
  const searchMovieData = await axios.get(
    `http://localhost:4000/movies?search=${movie_name}&searchBy=title`
  );

  // console.log(searchMovieData.data);

  dispatch({
    type: "FETCH_SEARCHED_MOVIES",
    payload: {
      searchedMovies: searchMovieData.data.data,
    },
  });
};

export const fetchSorted = (movie_genre) => async (dispatch) => {
  const sortedMoviesData = await axios.get(
    `http://localhost:4000/movies?limit=12&searchBy=genres&filter=${movie_genre}`
  );

  // console.log(sortedMoviesData);

  dispatch({
    type: "FETCH_SORTED_MOVIES",
    payload: {
      sortedMovies: sortedMoviesData.data.data,
    },
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
    type: "SORT_BY_TITLE",
    payload: {
      sortedMovies: sortedMoviesData,
    },
  });
};

export const sortByRuntime = (movies) => async (dispatch) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    //if b is larger than a returns negative number - which means a should come before it
    return b.runtime - a.runtime;
  });

  dispatch({
    type: "SORT_BY_TITLE",
    payload: {
      sortedMovies: sortedMoviesData,
    },
  });
};

export const sortByRating = (movies) => async (dispatch) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    //if b is larger than a returns negative number - which means a should come before it
    return b.vote_average - a.vote_average;
  });

  dispatch({
    type: "SORT_BY_RATING",
    payload: {
      sortedMovies: sortedMoviesData,
    },
  });
};

export const sortByReleaseDate = (movies) => async (dispatch) => {
  const sortedMoviesData = movies.sort(function (a, b) {
    var dateA = new Date(a.release_date),
      dateB = new Date(b.release_date);
    return dateB - dateA;
  });

  dispatch({
    type: "SORT_BY_RELEASE_DATE",
    payload: {
      sortedMovies: sortedMoviesData,
    },
  });
};