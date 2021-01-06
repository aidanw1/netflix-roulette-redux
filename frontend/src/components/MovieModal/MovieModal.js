import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import DateView from "react-datepicker";
import DatePicker from "./DatePicker";
import "./customDatePickerWidth.css";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, ErrorMessage } from "formik";
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
} from "./MovieModalStyles";

function MovieModal({ modalTitle }) {
  const [submittedValues, setSubmittedValues] = useState([]);

  const initialValues = {
    title: "",
    date: "",
    imageUrl: "",
    genre: "",
    overview: "",
    runtime: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    date: Yup.string().required("Release Date is required"),
    imageUrl: Yup.string().required("Image Url required"),
    genre: Yup.string().required("Genre required"),
    overview: Yup.string().required("Overview Description required"),
    runtime: Yup.number().required("Runtime required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    console.log("Submit props", onSubmitProps);
    onSubmitProps.setSubmitting(false); //wait for api response then call this
    onSubmitProps.resetForm();
    setSubmittedValues(values);
    console.log(submittedValues);
  };

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
            {/* <DatePicker name="date" /> */}

            <ErrorText name="date" component="div" />
            {/* Movie URL */}
            <ModalTitle>Movie Url</ModalTitle>
            <ModalInput name="imageUrl" type="text" />
            <ErrorText name="imageUrl" component="div" />
            {/* Genre */}
            <ModalTitle>Genre</ModalTitle>
            <ModalInput name="genre" type="text" />
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
              <ResetButton>RESET</ResetButton>
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
