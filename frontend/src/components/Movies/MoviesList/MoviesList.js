import React from "react";
import Movies from "../Movies/Movies";
import FilterMovies from "../../FilterMovies/FilterMovies";
import { MoviesListContainer, Container } from "./MoviesListStyles";

const MoviesList = ({
  deleteModal,
  setDeleteModal,
  closeModal,
  setSwitchBanner,
  setMovieDetailsId,
  editMovieModal,
  movieData,
  handleMovieDelete,
}) => {
  return (
    <MoviesListContainer>
      <Container>
        <FilterMovies />
        <Movies
          handleMovieDelete={handleMovieDelete}
          movieData={movieData}
          editMovieModal={editMovieModal}
          setMovieDetailsId={setMovieDetailsId}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          closeModal={closeModal}
          setSwitchBanner={setSwitchBanner}
        />
      </Container>
    </MoviesListContainer>
  );
};

export default MoviesList;
