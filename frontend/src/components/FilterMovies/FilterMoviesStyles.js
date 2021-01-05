import styled from "styled-components";
import { grey, brightRed } from "../../styles/colors";
import { BsCaretDownFill } from "react-icons/bs";

export const MoviesFound = styled.p`
  margin: 2rem 0;
  font-size: 1.6rem;
  span {
    color: white;
  }
  color: #a2a2a2;
`;

export const FilterMoviesContainer = styled.div`
  margin: auto;
  padding-top: 2rem;
  padding-left: 1rem;
`;

export const Categories = styled.div`
  display: flex;
  color: white;
  font-size: 1.7rem;
  text-transform: uppercase;

  div {
    margin-right: 3rem;
    cursor: pointer;
  }
`;

export const SortBy = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const SortContainer = styled.div`
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SortByTitle = styled.div`
  font-size: 1.7rem;
  text-transform: uppercase;
  margin-right: 5rem;
  color: #8f8f8f;
`;

export const ReleaseTitle = styled(SortByTitle)`
  margin-right: 1rem;
  color: white;
  cursor: pointer;
`;

export const Border = styled.div`
  background-color: #828282;
`;
