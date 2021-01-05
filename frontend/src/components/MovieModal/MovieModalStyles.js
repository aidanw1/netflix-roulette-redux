import styled from "styled-components";
import { Button } from "../../styles/button-styles";
import { darkRed, greyBackground, blackBackground } from "../../styles/colors";

export const ModalContainer = styled.form`
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

export const ModalInput = styled.input`
  color: white;
  width: 100%;
  padding: 1rem 0;
  background-color: ${greyBackground};
  outline: none;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  height: 27px;
  font-size: 2rem;
`;

export const SubmitButton = styled(Button)`
  padding: 10px 5px;
`;

export const ResetButton = styled(Button)`
  background: ${blackBackground};
  border: 2px solid ${darkRed};
  color: ${darkRed};
  padding: 10px 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0 1rem 0;
`;
