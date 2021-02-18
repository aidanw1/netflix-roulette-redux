import React from "react";
import { Button } from "../../styles/button-styles";
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
