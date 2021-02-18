import React from "react";
import Banner from "../components/shared/Banner/Banner";
import Footer from "../components/shared/Footer/Footer";
import MoviesList from "../components/Movies/MoviesList/MoviesList";

const Home = ({
  movieModal,
  addMovieModal = { addMovieModal },
  closeModal,
  setMovieModal,
  switchBanner,
  setSwitchBanner,
  movieDetailsId,
  modalTitle,
  editMovieModal,
}) => {
  return (
    <div>
      <Banner
        modalTitle={modalTitle}
        movieDetailsId={movieDetailsId}
        switchBanner={switchBanner}
        setSwitchBanner={setSwitchBanner}
        movieModal={movieModal}
        setMovieModal={setMovieModal}
        addMovieModal={addMovieModal}
        closeModal={closeModal}
      />
      <MoviesList
        editMovieModal={editMovieModal}
        setSwitchBanner={setSwitchBanner}
      />
      <Footer />
    </div>
  );
};

export default Home;
