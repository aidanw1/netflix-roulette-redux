import axios from "axios";

export const addMovies = (movie) => async (dispatch) => {
  const moviesData = await axios.post(`/movies/${movie}`);

  dispatch({
    type: "ADD_MOVIE",
    payload: {
      addedMovies: moviesData,
    },
  });
};
