import axios from "axios";

export const getMovieDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_MOVIE_DETAILS",
  });

  const detailData = await axios.get(`http://localhost:4000/movies/${id}`);

  dispatch({
    type: "GET_MOVIE_DETAILS",
    payload: {
      movieDetail: detailData.data,
    },
  });
};
