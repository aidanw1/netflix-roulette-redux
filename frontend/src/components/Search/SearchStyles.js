import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  margin-top: 30px;
  input {
    width: 100%;
    padding: 1rem;
    outline: none;
    border-radius: 5px;
    border: none;
    box-shadow: none;
    background: #232323;
    color: white;
    opacity: 0.9;
    font-size: 1.8rem;
    &::-webkit-input-placeholder {
      font-size: 1.7rem;
    }
  }
`;
