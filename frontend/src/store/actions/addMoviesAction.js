import axios from "../../helpers/axiosHelper";
import { ADD_MOVIE } from "../constants/movieConstants";

export const addMovies = (movie) => async (dispatch) => {
  const moviesData = await axios.post(`/movies`, {
    ...movie,
    genres: [movie.genres],
    release_date: movie.release_date,
    runtime: +movie.runtime,
    date: undefined,
  });

  dispatch({
    type: ADD_MOVIE,
    payload: moviesData.data,
  });
};
