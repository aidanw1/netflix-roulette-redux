import React from "react";
import Search from "../../Search/Search";
import AddMovie from "../../AddMovie/AddMovie";
import Modal from "../../shared/Modal/Modal";
import MovieModal from "../../MovieModal/MovieModal";

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
