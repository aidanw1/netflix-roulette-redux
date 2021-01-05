import styled from "styled-components";
import { Button } from "../../styles/button-styles";

export const AddMovieButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: -40px;
  padding-top: 15px;
`;

export const AddMovieButton = styled(Button)`
  background: rgba(82, 82, 82, 0.8);
  font-weight: bold;
`;
