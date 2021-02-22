import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Movie from "../Movie/Movie";
import Loader from "../../shared/Loader/Loader";
import { MoviesGrid } from "./MoviesStyles";

const Movies = ({ setSwitchBanner, editMovieModal }) => {
  // const displayMovieDetails = (id) => {
  //   setSwitchBanner(true);
  //   setMovieDetailsId(id);
  // };

  const { searchedMovies, loading } = useSelector((state) => state.movies);

  console.log(searchedMovies);

  // console.log(
  //   searchedMovies.sort(function (a, b) {
  //     if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
  //     if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
  //     return 0;
  //   })
  // );

  const dispatch = useDispatch();
  //show loader - loading true
  useEffect(() => {}, [dispatch, searchedMovies]);

  return (
    <MoviesGrid>
      {loading && <Loader />}
      {/* {searchedMovies.length < 0 && loading ? <Loader /> : null} */}
      {/* {loading && searchedMovies.length < 1 ? null : <Loader />} */}
      {searchedMovies.length ? (
        <>
          {searchedMovies.map((movie) => (
            <div key={movie.id}>
              <Movie
                editMovieModal={editMovieModal}
                setSwitchBanner={setSwitchBanner}
                movie={movie}
              />
            </div>
          ))}
        </>
      ) : null}
    </MoviesGrid>
  );
};

export default Movies;
