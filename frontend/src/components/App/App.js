import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyles";
import MovieData from "../../mocks/Data";
import Home from "../../pages/Home";

export default function App() {
  const [movieData, setMovieData] = useState(MovieData);
  const [movieModal, setMovieModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [switchBanner, setSwitchBanner] = useState(false);
  const [movieDetailsId, setMovieDetailsId] = useState();

  function closeModal(e) {
    // console.log(e.target.tagName);
    if (e.target.tagName === "DIV") {
      setMovieModal(false);
      // setDeleteModal(false);
    }
  }

  function addMovieModal() {
    setMovieModal(true);
    setModalTitle("ADD MOVIE");
  }

  function editMovieModal() {
    setMovieModal(true);
    setModalTitle("EDIT MOVIE");
  }

  function handleMovieDelete(id) {
    if (movieDetailsId !== null && movieDetailsId === id) {
      setMovieDetailsId(undefined);
    }
    setMovieData(movieData.filter((recipe) => recipe.id !== id));
  }

  return (
    <div>
      <GlobalStyle />
      <Home
        handleMovieDelete={handleMovieDelete}
        movieData={movieData}
        editMovieModal={editMovieModal}
        setMovieModal={setMovieModal}
        modalTitle={modalTitle}
        movieDetailsId={movieDetailsId}
        setMovieDetailsId={setMovieDetailsId}
        movieModal={movieModal}
        addMovieModal={addMovieModal}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        closeModal={closeModal}
        switchBanner={switchBanner}
        setSwitchBanner={setSwitchBanner}
      />
    </div>
  );
}
