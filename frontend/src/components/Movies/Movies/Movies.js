import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovies,
  showLoader,
  hideLoader,
} from "../../../actions/moviesAction";
import Movie from "../Movie/Movie";
import Loader from "../../Loader/Loader";
import { MoviesGrid } from "./MoviesStyles";

const Movies = ({
  deleteModal,
  setDeleteModal,
  closeModal,
  setSwitchBanner,
  setMovieDetailsId,
  editMovieModal,
  movieData,
  handleMovieDelete,
}) => {
  // const displayMovieDetails = (id) => {
  //   setSwitchBanner(true);
  //   setMovieDetailsId(id);
  // };

  const { searchedMovies, loading } = useSelector((state) => state.movies);

  console.log(searchedMovies);

  const dispatch = useDispatch();
  //show loader - loading true
  useEffect(() => {}, [dispatch, searchedMovies]);

  return (
    <MoviesGrid>
      {loading && <Loader />}

      {searchedMovies.length ? (
        <>
          {searchedMovies.map((movie) => (
            <div key={movie.id}>
              <Movie
                handleMovieDelete={handleMovieDelete}
                editMovieModal={editMovieModal}
                setSwitchBanner={setSwitchBanner}
                movie={movie}
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                closeModal={closeModal}
              />
            </div>
          ))}
        </>
      ) : null}
    </MoviesGrid>
  );
};

export default Movies;
