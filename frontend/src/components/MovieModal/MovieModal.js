import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../store/actions/addMoviesAction";

import { Formik } from "formik";
import * as Yup from "yup";

import {
  ModalTitle,
  ModalInput,
  ModalContainer,
  ModalHeader,
  ButtonContainer,
  ResetButton,
  SubmitButton,
  ErrorText,
  DropDown,
  DateSelector,
  SelectorContainer,
  IconBox,
  ArrowBox,
} from "./MovieModalStyles";

function MovieModal({ modalTitle }) {
  // const [submittedValues, setSubmittedValues] = useState([]);
  const { searchedMovies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    release_date: "",
    poster_path: "",
    genres: "",
    overview: "",
    runtime: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    release_date: Yup.string().required("Release Date is required"),
    poster_path: Yup.string().required("Image Url required"),
    genres: Yup.string().required("Genre required"),
    overview: Yup.string().required("Overview Description required"),
    runtime: Yup.number().required("Runtime required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    console.log("Submit props", onSubmitProps);
    dispatch(addMovies(values));
    onSubmitProps.setSubmitting(false); //wait for api response then call this
    onSubmitProps.resetForm();
    // setSubmittedValues(values);
    // console.log(submittedValues);
  };

  const onReset = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
  };

  const dropdownOptions = [
    { key: "Select Genre", value: "" },
    { key: "Drama", value: "drama" },
    { key: "Adventure", value: "adventure" },
    { key: "Action", value: "action" },
    { key: "Family", value: "family" },
    { key: "Fantasy", value: "fantasy" },
  ];

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <ModalContainer>
            <ModalHeader>{modalTitle}</ModalHeader>
            {/* Title */}
            <ModalTitle>Title</ModalTitle>
            <ModalInput name="title" type="text" />
            <ErrorText name="title" component="div" />
            {/* Release Date */}
            <ModalTitle>Release Date</ModalTitle>
            <SelectorContainer>
              <DateSelector
                control="release_date"
                name="date"
                placeholderText="Select Date"
              />
              <IconBox size={20} />
            </SelectorContainer>

            <ErrorText name="date" component="div" />
            {/* Movie URL */}
            <ModalTitle>Movie Url</ModalTitle>
            <ModalInput name="poster_path" type="text" />
            <ErrorText name="poster_path" component="div" />
            {/* Genre */}
            <ModalTitle>Genre</ModalTitle>
            <SelectorContainer>
              <DropDown
                control="select"
                name="genres"
                options={dropdownOptions}
              />
              <ArrowBox size={20} />
            </SelectorContainer>

            <ErrorText name="genre" component="div" />
            {/* Overview */}
            <ModalTitle>Overview</ModalTitle>
            <ModalInput name="overview" type="text" />
            <ErrorText name="overview" component="div" />
            {/* Title */}
            <ModalTitle>Runtime</ModalTitle>
            <ModalInput name="runtime" type="text" />
            <ErrorText name="runtime" component="div" />
            {/* Runtime */}
            <ButtonContainer>
              <ResetButton onClick={onReset}>RESET</ResetButton>
              <SubmitButton type="submit" primary>
                SUBMIT
              </SubmitButton>
            </ButtonContainer>
          </ModalContainer>
        );
      }}
    </Formik>
  );
}

export default MovieModal;
