import React from "react";
import Icon from "../../Icon/Icon";
import Search from "../../Search/Search";
import AddMovie from "../../AddMovie/AddMovie";
import Modal from "../../Modal/Modal";
import MovieModal from "../../MovieModal/MovieModal";
import Loader from "../../Loader/Loader";
import {
  SearchTitle,
  SearchBannerContainer,
  Content,
  SearchContent,
} from "./SearchBannerStyles";
import { blackBackground } from "../../../styles/colors";

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
