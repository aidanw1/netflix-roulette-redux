import axios from "../../helpers/axiosHelper";

export const getMovieDetails = (id) => async (dispatch) => {
  dispatch({
    type: "INIT_MOVIE_DETAILS",
  });
  const detailData = await axios.get(`/movies/${id}`);

  dispatch({
    type: "GET_MOVIE_DETAILS",
    payload: {
      movieDetail: detailData.data,
    },
  });
};
