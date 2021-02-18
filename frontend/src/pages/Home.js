import React from "react";
import Banner from "../components/shared/Banner/Banner";
import Footer from "../components/shared/Footer/Footer";
import MoviesList from "../components/Movies/MoviesList/MoviesList";

const Home = ({
  deleteModal,
  setDeleteModal,
  movieModal,
  addMovieModal = { addMovieModal },
  closeModal,
  setMovieModal,
  switchBanner,
  setSwitchBanner,
  movieDetailsId,
  setMovieDetailsId,
  modalTitle,
  editMovieModal,
  movieData,
  handleMovieDelete,
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
        handleMovieDelete={handleMovieDelete}
        movieData={movieData}
        editMovieModal={editMovieModal}
        setMovieDetailsId={setMovieDetailsId}
        setSwitchBanner={setSwitchBanner}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        closeModal={closeModal}
      />
      <Footer />
    </div>
  );
};

export default Home;
