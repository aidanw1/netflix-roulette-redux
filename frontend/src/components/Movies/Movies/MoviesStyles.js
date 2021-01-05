import styled from "styled-components";

export const MovieContainer = styled.div`
  display: grid;
  justify-content: center;
`;

export const MoviesGrid = styled.div`
  display: grid;
  margin: auto;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 2rem;
`;
