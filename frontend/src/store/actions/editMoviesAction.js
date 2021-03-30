import axios from "../../helpers/axiosHelper";
import { EDIT_MOVIE } from "../constants/movieConstants";

export const editMovie = (movie) => async (dispatch) => {
  const updatedMovie = {
    ...movie,
    title: movie.title,
    genres: [movie.genres],
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    overview: movie.overview,
    // release_date: "2016-03-11",
    runtime: +movie.runtime,
    date: undefined,
  };
  const moviesData = await axios.put(`/movies`, updatedMovie);

  dispatch({
    type: EDIT_MOVIE,
    payload: updatedMovie,
  });
};
