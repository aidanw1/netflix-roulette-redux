import React from "react";
import {
  DeleteHeader,
  DeleteModalContainer,
  DeleteButton,
  ConfirmContainer,
  DeleteModalQuestion,
} from "./DeleteModalStyles";

import { deleteMovies } from "../../actions/deleteMoviesAction";
import { useDispatch, useSelector } from "react-redux";

const DeleteModal = ({ movie, setDeleteModal }) => {
  const dispatch = useDispatch();

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
            dispatch(deleteMovies(movie.id));
          }}
        >
          CONFIRM
        </DeleteButton>
      </ConfirmContainer>
    </DeleteModalContainer>
  );
};

export default DeleteModal;
