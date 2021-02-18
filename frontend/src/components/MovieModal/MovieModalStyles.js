import styled from "styled-components";
import { Button } from "../../styles/button-styles";
import { darkRed, greyBackground, blackBackground } from "../../styles/colors";
import { Field, Form, ErrorMessage } from "formik";
import Select from "../shared/Select";
import DatePicker from "../shared/DatePicker";
import { FaCalendarAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

export const ModalContainer = styled(Form)`
  margin: 0 3rem;
  padding-top: 20px;
  position: "relative";
`;

export const ModalHeader = styled.h1`
  color: white;
  font-weight: lighter;
  font-size: 3rem;
  letter-spacing: 2px;
`;

export const ModalTitle = styled.h2`
  color: ${darkRed};
  font-size: 1.6rem;
  text-transform: uppercase;
  padding: 2rem 0 1rem 0;
`;

export const ModalInput = styled(Field)`
  color: white;
  width: 100%;
  padding: 1rem 1rem;
  background-color: ${greyBackground};
  outline: none;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  font-size: 2rem;
`;

export const DropDown = styled(Select)`
  color: white;
  width: 100%;
  background-color: ${greyBackground};
  outline: none;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  padding: 1rem 1rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const SelectorContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const IconBox = styled(FaCalendarAlt)`
  color: ${darkRed};
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ArrowBox = styled(TiArrowSortedDown)`
  color: ${darkRed};
  position: absolute;
  top: 13px;
  right: 10px;
`;

export const DateSelector = styled(DatePicker)`
  color: white;
  width: 100%;
  background-color: ${greyBackground};
  outline: none;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  padding: 1rem 1rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 1.6rem;
  font-weight: bold;
`;

export const SubmitButton = styled(Button)`
  padding: 10px 15px;
`;

export const ResetButton = styled(Button)`
  background: ${blackBackground};
  border: 2px solid ${darkRed};
  color: ${darkRed};
  padding: 10px 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0 1rem 0;
`;

export const DateContainer = styled(DatePicker)`
  min-width: 100%;
  color: white;
  width: 100%;
  padding: 2rem 0;
  background-color: ${greyBackground};
  outline: none;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  height: 27px;
`;
