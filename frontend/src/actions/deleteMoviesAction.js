import axios from "axios";

export const deleteMovies = (id) => async (dispatch) => {
  console.log(id);
  dispatch({
    type: "DELETE_MOVIE",
    payload: { id },
  });
};

// export const openDeleteModal = (id, setDeleteModal) => async (dispatch) => {
//   console.log(id);
//   dispatch({
//     type: "OPEN_DELETE_MODAL",
//     payload: { id, setDeleteModal },
//   });
// };
