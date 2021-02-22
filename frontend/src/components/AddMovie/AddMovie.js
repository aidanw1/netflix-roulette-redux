import React from "react";
import { AddMovieButtonContainer, AddMovieButton } from "./AddMovieStyles";

const AddMovie = ({ addMovieModal }) => {
  return (
    <AddMovieButtonContainer>
      <AddMovieButton red onClick={addMovieModal}>
        + ADD MOVIE
      </AddMovieButton>
    </AddMovieButtonContainer>
  );
};

export default AddMovie;
