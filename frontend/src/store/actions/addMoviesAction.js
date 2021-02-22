import axios from "../../helpers/axiosHelper";

export const addMovies = (movie) => async (dispatch) => {
  const moviesData = await axios.post(`/movies`, {
    ...movie,
    genres: [movie.genres],
    release_date: movie.release_date,
    // release_date: "2016-03-11",
    runtime: +movie.runtime,
    date: undefined,
  });

  dispatch({
    type: "ADD_MOVIE",
    payload: {
      addedMovies: moviesData.data,
    },
  });
};
