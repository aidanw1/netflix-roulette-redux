import React from "react";
import {
  DeleteHeader,
  DeleteModalContainer,
  DeleteButton,
  ConfirmContainer,
  DeleteModalQuestion,
} from "./DeleteModalStyles";
import { deleteMovie } from "../../store/thunks/thunks";

import { deleteMovies } from "../../store/actions/deleteMoviesAction";
import { useDispatch } from "react-redux";
import { connect } from "formik";

const DeleteModal = ({ movie, setDeleteModal }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    deleteMovie(movie.id);
  };

  return (
    <DeleteModalContainer>
      <DeleteHeader>Delete Movie</DeleteHeader>
      <DeleteModalQuestion>
        Are you sure you want to delete this movie?
      </DeleteModalQuestion>
      <ConfirmContainer>
        <DeleteButton
          type="button"
          primary
          onClick={() => {
            setDeleteModal(false);
            deleteItem();
            // dispatch(deleteMovies(movie.id));
          }}
        >
          CONFIRM
        </DeleteButton>
      </ConfirmContainer>
    </DeleteModalContainer>
  );
};

export default DeleteModal;
