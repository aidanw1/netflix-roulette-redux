const initState = {
  allMovies: [],
  searchedMovies: [],
  sortedMovies: [],
  loading: false,
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    // case "FETCH_MOVIES":
    //   return {
    //     ...state,
    //     allMovies: action.payload.allMovies,
    //   };
    case "INIT_FETCH_MOVIES":
      return {
        ...state,
        loading: true,
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
    // case "OPEN_DELETE_MODAL":
    //   return {
    //     ...state,

    //   }
    case "SORT_BY_RATING":
      return {
        ...state,
        searchedMovies: action.payload.sortedMovies,
      };
    case "SORT_BY_RUNTIME":
      return {
        ...state,
        searchedMovies: action.payload.sortedMovies,
      };
    case "SORT_BY_TITLE":
      return {
        ...state,
        searchedMovies: action.payload.sortedMovies,
      };
    case "SORT_BY_RELEASE_DATE":
      return {
        ...state,
        searchedMovies: action.payload.sortedMovies,
      };

    default:
      return { ...state };
  }
};

export default moviesReducer;
