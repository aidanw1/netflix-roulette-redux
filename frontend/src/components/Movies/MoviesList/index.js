import React, { useState } from "react";
import Movies from "../Movies";
import FilterMovies from "../../FilterMovies";
import { MoviesListContainer, Container } from "./MoviesListStyles";

const MoviesList = ({ setSwitchBanner, editMovieModal }) => {
  return (
    <MoviesListContainer>
      <Container>
        <FilterMovies />
        <Movies
          editMovieModal={editMovieModal}
          setSwitchBanner={setSwitchBanner}
        />
      </Container>
    </MoviesListContainer>
  );
};

export default MoviesList;
