import axios from "axios";

export const addMovies = (movie) => async (dispatch) => {
  const moviesData = await axios.post(`http://localhost:4000/movies`);

  dispatch({
    type: "ADD_MOVIE",
    payload: moviesData.data,
  });
};
