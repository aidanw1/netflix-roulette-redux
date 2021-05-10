import { GET_MOVIE_DETAILS } from "../constants/movieConstants";

const initialState = {
  movieDetail: {},
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetail: action.payload,
        movieDetailLoading: false,
      };
    default:
      return { ...state };
  }
};

export default movieDetailsReducer;
