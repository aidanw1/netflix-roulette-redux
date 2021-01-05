import styled from "styled-components";
import { brightRed, darkRed } from "../../styles/colors";

export const IconContainer = styled.div`
  display: flex;
  top: 0;
  position: absolute;
  z-index: 5;
  padding: 1rem 0;
  cursor: pointer;
`;

export const IconBold = styled.h2`
  color: ${brightRed};
  font-size: 2rem;
`;

export const IconSub = styled.span`
  color: ${darkRed};
  font-size: 2rem;
`;
