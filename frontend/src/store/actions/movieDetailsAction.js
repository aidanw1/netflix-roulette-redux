import axios from "../../helpers/axiosHelper";
import { INIT_MOVIE_DETAILS } from "../constants/movieConstants";

export const getMovieDetails = (id) => async (dispatch) => {
  dispatch({
    type: INIT_MOVIE_DETAILS,
  });
  const detailData = await axios.get(`/movies/${id}`);

  dispatch({
    type: INIT_MOVIE_DETAILS,
    payload: detailData.data,
  });
};
