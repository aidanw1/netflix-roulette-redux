import React from "react";
import Icon from "../Icon";
import SearchBanner from "../../Banners/SearchBanner";
import MovieDetailsBanner from "../../Banners/MovieDetailsBanner";

import {
  BannerContainerSearch,
  BannerContainerMovieDetails,
} from "./BannerStyles";

export default function Banner({
  movieModal,
  addMovieModal = { addMovieModal },
  closeModal,
  switchBanner,
  setSwitchBanner,
  movieDetailsId,
  modalTitle,
  setMovieModal,
}) {
  if (switchBanner) {
    return (
      <BannerContainerMovieDetails>
        <Icon setSwitchBanner={setSwitchBanner} />
        <MovieDetailsBanner
          setSwitchBanner={setSwitchBanner}
          movieDetailsId={movieDetailsId}
        />
      </BannerContainerMovieDetails>
    );
  }
  return (
    <BannerContainerSearch>
      <Icon setSwitchBanner={setSwitchBanner} />
      <SearchBanner
        setMovieModal={setMovieModal}
        modalTitle={modalTitle}
        movieModal={movieModal}
        addMovieModal={addMovieModal}
        closeModal={closeModal}
      />
    </BannerContainerSearch>
  );
}
