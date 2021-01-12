import React, { useState } from "react";
import Icon from "../../Icon/Icon";
import Search from "../../Search/Search";
import AddMovie from "../../AddMovie/AddMovie";
import Modal from "../../Modal/Modal";
import MovieModal from "../../MovieModal/MovieModal";
import Loader from "../../Loader/Loader";
import { addMovies } from "../../../actions/addMoviesAction";
import {
  SearchTitle,
  SearchBannerContainer,
  Content,
  SearchContent,
} from "./SearchBannerStyles";
import { blackBackground } from "../../../styles/colors";

const SearchBanner = ({
  closeModal,
  // modalTitle,
  // setMovieModal,
}) => {
  const [movieModal, setMovieModal] = useState(false);

  function addMovieModal() {
    setMovieModal(true);
  }

  return (
    <SearchBannerContainer onClick={closeModal}>
      <AddMovie addMovieModal={addMovieModal} />
      <SearchContent>
        <SearchTitle>FIND YOUR MOVIE</SearchTitle>
        <Search />
      </SearchContent>

      <Modal open={movieModal} onClose={() => setMovieModal(false)}>
        <MovieModal action={addMovies} modalTitle="Add Movie" />
      </Modal>
    </SearchBannerContainer>
  );
};

export default SearchBanner;
