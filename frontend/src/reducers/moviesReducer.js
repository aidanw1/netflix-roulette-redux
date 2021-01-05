const initState = {
  allMovies: [],
  searchedMovies: [],
  sortedMovies: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        allMovies: action.payload.allMovies,
      };
    case "FETCH_SEARCHED_MOVIES":
      return {
        ...state,
        searchedMovies: action.payload.searchedMovies,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searchedMovies: [],
      };
    case "FETCH_SORTED_MOVIES":
      return {
        ...state,
        searchedMovies: action.payload.sortedMovies,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        searchedMovies: state.searchedMovies.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    // case "OPEN_DELETE_MODAL":
    //   return {
    //     ...state,

    //   }
    case "SORT_BY_TITLE":
      return {
        ...state,
        searchedMovies: action.payload.sortedMovies,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
