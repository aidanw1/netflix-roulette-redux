import React from "react";
import Search from "../../Search";
import AddMovie from "../../AddMovie";
import Modal from "../../shared/Modal";
import MovieModal from "../../MovieModal";

import {
  SearchTitle,
  SearchBannerContainer,
  SearchContent,
} from "./SearchBannerStyles";

const SearchBanner = ({
  movieModal,
  addMovieModal,
  closeModal,
  modalTitle,
  setMovieModal,
}) => {
  return (
    <SearchBannerContainer onClick={closeModal}>
      <AddMovie addMovieModal={addMovieModal} />
      <SearchContent>
        <SearchTitle>FIND YOUR MOVIE</SearchTitle>
        <Search />
      </SearchContent>

      <Modal open={movieModal} onClose={() => setMovieModal(false)}>
        <MovieModal modalTitle={modalTitle} />
      </Modal>
    </SearchBannerContainer>
  );
};

export default SearchBanner;
