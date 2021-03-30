import axios from "../../helpers/axiosHelper";

import {
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
} from "../actionCreators/actionCreators";

// const addMovies = (movie) => (dispatch) => {
// const newMovie = {
//     ...movie,
//     genres: [movie.genres],
//     release_date: movie.release_date,
//     runtime: +movie.runtime,
//     date: undefined,
// }
//   axios.post("/movies", );
// };

const deleteMovie = (id) => (dispatch) => {
  axios.delete(id).then(() => dispatch(deleteMovieCreator(id)));
};

export { deleteMovie };
