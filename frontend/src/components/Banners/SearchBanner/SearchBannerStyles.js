import styled from "styled-components";
import { blackBackground, darkRed } from "../../../styles/colors";

export const SearchBannerContainer = styled.div`
  z-index: 1000;
  position: relative;
  max-width: 100rem;
  margin: auto;
`;

export const SearchContent = styled.div`
  margin-top: 70px;
  position: absolute;
  width: 100%;
`;

export const SearchTitle = styled.h2`
  color: white;
  font-weight: lighter;
  font-size: 3rem;
  letter-spacing: 2px;
`;
