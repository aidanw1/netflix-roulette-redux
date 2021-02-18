import React, { useState } from "react";
import defaultErrorImage from "../../../images/not-available.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../../store/actions/movieDetailsAction";
import Modal from "../../shared/Modal/Modal";
import DeleteModal from "../../DeleteModal/DeleteModal";

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

const Movie = ({
  movie,
  editMovieModal,
  setSwitchBanner,
}) => {
  const [showEditBox, setShowEditBox] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  
  const dispatch = useDispatch();


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
    </>
  );
};

export default Movie;

// Movie.propTypes = {
//   src: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   year: PropTypes.string,
//   genre: PropTypes.string,
// };
