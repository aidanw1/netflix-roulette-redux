import styled from "styled-components";
import { darkRed } from "../../../styles/colors";
import { FaArrowCircleLeft } from "react-icons/fa";

export const MovieDetailsContainer = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  width: 100rem;
  margin: auto;
`;

export const MovieDetailsTitleContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    display: block;
    color: ${darkRed};
    font-size: 1.6rem;
    margin-left: auto;
    font-weight: bold;
    cursor: pointer;
    padding-left: 5px;
  }
`;

export const MovieDetailsTitle = styled.h1`
  font-weight: 300;
  font-size: 5rem;
  color: white;
`;

export const MovieDetailsRating = styled.h2`
  color: #7bb156;
  border: 1px solid white;
  padding: 1.4rem;
  font-size: 2rem;
  border-radius: 50%;
  margin-left: 10px;
`;

export const MovieDetailsDescription = styled.p`
  margin-top: 14px;
  font-size: 1.6rem;
  color: #ccc;
`;

export const MovieDetailsImage = styled.img`
  width: 200px;
  height: 100%;
`;

export const MovieDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
`;

export const MovieDetailsGenre = styled.p`
  font-size: 1.6rem;
  color: #ccc;
  margin-bottom: 20px;
`;

export const MovieDetailsYear = styled.span`
  display: block;
  color: ${darkRed};
  font-size: 2.2rem;
  padding-right: 30px;
`;

export const MovieDetailsRuntime = styled(MovieDetailsYear)``;
export const TimeContainer = styled.div`
  display: flex;
`;

export const BackIcon = styled(FaArrowCircleLeft)`
  color: ${darkRed};
  cursor: pointer;
`;

export const BackContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
