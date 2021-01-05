import React from "react";
import {
  ModalTitle,
  ModalInput,
  ModalContainer,
  ModalHeader,
  ButtonContainer,
  ResetButton,
  SubmitButton,
} from "./MovieModalStyles";

const MovieModal = ({ modalTitle }) => {
  return (
    <ModalContainer>
      <ModalHeader>{modalTitle}</ModalHeader>
      {/* Title */}
      <ModalTitle>Title</ModalTitle>
      <ModalInput type="text" />
      {/* Release Date */}
      <ModalTitle>Release Date</ModalTitle>
      <ModalInput type="text" />
      {/* Movie URL */}
      <ModalTitle>Movie Url</ModalTitle>
      <ModalInput type="text" />
      {/* Genre */}
      <ModalTitle>Genre</ModalTitle>
      <ModalInput type="text" />
      {/* Overview */}
      <ModalTitle>Overview</ModalTitle>
      <ModalInput type="text" />
      {/* Title */}
      <ModalTitle>Runtime</ModalTitle>
      <ModalInput type="text" />
      {/* Runtime */}
      <ButtonContainer>
        <ResetButton>RESET</ResetButton>
        <SubmitButton primary>SUBMIT</SubmitButton>
      </ButtonContainer>
    </ModalContainer>
  );
};

export default MovieModal;
