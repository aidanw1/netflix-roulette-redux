import axios from "axios";

export const addMovies = (movie) => async (dispatch) => {
  const moviesData = await axios.post(`/movies`);

  dispatch({
    type: "ADD_MOVIE",
    payload: moviesData.data,
  });
};
