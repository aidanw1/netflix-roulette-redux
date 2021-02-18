import styled from "styled-components";
import { brightRed, darkRed, lightGreyBackground } from "./colors";

export const Button = styled.button`
  border-radius: 5px;
  margin-left: 1rem;
  background: ${({ primary }) =>
    primary ? `${brightRed}` : `${lightGreyBackground}`};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ red }) => (red ? `${darkRed}` : "#ffffff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;
