const initState = {
  allMovies: [],
  searchedMovies: [],
  sortedMovies: [],
  loading: false,
  movieDetailLoading: false,
};

const moviesReducer = (state = initState, action) => {
  const getUpdatedMovie = () => {
    const { updatedMovie } = action.payload;
    console.log(updatedMovie);
    const oldMovieIndex = state.searchedMovies.findIndex(
      (movie) => movie.id === updatedMovie.id
    );
    console.log(state.searchedMovies[oldMovieIndex]);
    state.searchedMovies[oldMovieIndex] = updatedMovie;
    console.log(state.searchedMovies[oldMovieIndex]);
    return state.searchedMovies;
  };

  switch (action.type) {
    case "INIT_FETCH_MOVIES":
      return {
        ...state,
        loading: true,
      };

    case "INIT_MOVIE_DETAILS":
      return {
        ...state,
        movieDetailLoading: true,
      };
    case "FETCH_SEARCHED_MOVIES":
      return {
        ...state,
        searchedMovies: action.payload.searchedMovies,
        loading: false,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searchedMovies: [],
        loading: false,
      };
    case "FETCH_SORTED_MOVIES":
      return {
        ...state,
        searchedMovies: action.payload.sortedMovies,
        loading: false,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        searchedMovies: state.searchedMovies.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "ADD_MOVIE":
      console.info("payload is", action.payload);
      return {
        ...state,
        searchedMovies: [
          ...[action.payload.addedMovies],
          ...state.searchedMovies,
        ],
      };
    case "EDIT_MOVIE":
      console.info("payload is", action.payload);
      return {
        ...state,
        searchedMovies: getUpdatedMovie(),
      };
    case "SHOW_LOADER":
      return {
        ...state,
        loading: true,
      };
    case "HIDE_LOADER":
      return {
        ...state,
        loading: false,
      };
    case "SORT_BY_RATING":
    case "SORT_BY_RUNTIME":
    case "SORT_BY_TITLE":
    case "SORT_BY_RELEASE_DATE":
      return {
        ...state,
        searchedMovies: action.payload.sortedMovies,
      };

    default:
      return state;
  }
};

export default moviesReducer;
