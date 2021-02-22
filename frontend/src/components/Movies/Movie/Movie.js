import React, { useState } from "react";
import defaultErrorImage from "../../../images/not-available.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../../store/actions/movieDetailsAction";
import Modal from "../../shared/Modal/Modal";
import MovieModal from "../../MovieModal/MovieModal";
import DeleteModal from "../../DeleteModal/DeleteModal";
import { editMovie } from "../../../store/actions/editMoviesAction";

import {
  MovieContainer,
  Title,
  TitleContainer,
  DescriptionContainer,
  MovieImage,
  MovieImageContainer,
  Description,
  Year,
  EditIcon,
  EditBox,
  EditBoxContent,
  Edit,
  ModalCloseIcon,
  Delete,
} from "./MovieStyles";

const Movie = ({ movie, closeModal, handleMovieDelete, setSwitchBanner }) => {
  const [showEditBox, setShowEditBox] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const { searchedMovies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  function editMovieModal() {
    setEditModal(true);
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `auto` });
  };

  return (
    <>
      <MovieContainer>
        <MovieImageContainer>
          <MovieImage
            onError={(e) => (
              (e.target.onerror = null), (e.target.src = defaultErrorImage)
            )}
            src={movie.poster_path}
            alt="movie images"
            onClick={() => {
              dispatch(getMovieDetails(movie.id));
              setSwitchBanner(true);
              handleClick();
            }}
          />
          <EditIcon onClick={() => setShowEditBox(true)} />
          {showEditBox && (
            <EditBox>
              <EditBoxContent>
                <ModalCloseIcon
                  size={15}
                  onClick={() => setShowEditBox(false)}
                />
                <Edit onClick={editMovieModal}>Edit</Edit>
                <Delete
                  onClick={() => {
                    setDeleteModal(true);
                  }}
                >
                  Delete
                </Delete>
              </EditBoxContent>
            </EditBox>
          )}
        </MovieImageContainer>
        <TitleContainer>
          <Title>{movie.title}</Title>
          <Year>{movie.release_date}</Year>
        </TitleContainer>
        <DescriptionContainer>
          <Description>{movie.genres[0]}</Description>
        </DescriptionContainer>
      </MovieContainer>

      <Modal open={deleteModal} onClose={() => setDeleteModal(false)}>
        <DeleteModal movie={movie} setDeleteModal={setDeleteModal} />
      </Modal>
      <Modal open={editModal} onClose={() => setEditModal(false)}>
        <MovieModal action={editMovie} modalTitle="Edit Movie" movie={movie} />
      </Modal>
    </>
  );
};

export default Movie;
