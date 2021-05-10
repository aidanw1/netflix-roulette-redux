import React, { useState, useCallback } from "react";
import { GlobalStyle } from "./GlobalStyles";
import Home from "../../pages/Home";
import ErrorBoundary from "./ErrorBoundary";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export default function App({ store }) {
  const [movieModal, setMovieModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [switchBanner, setSwitchBanner] = useState(false);
  const [movieDetailsId, setMovieDetailsId] = useState();

  const closeModal = useCallback(
    (e) => {
      if (e.target.tagName === "DIV") {
        setMovieModal(false);
      }
    },
    [movieModal]
  );

  const addMovieModal = useCallback(() => {
    setMovieModal(true);
    setModalTitle("ADD MOVIE");
  }, [movieModal]);

  const editMovieModal = useCallback(() => {
    setMovieModal(true);
    setModalTitle("EDIT MOVIE");
  }, [movieModal, modalTitle]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <GlobalStyle />
          <Home
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
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}
