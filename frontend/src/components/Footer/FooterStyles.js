import styled from "styled-components";
import { lightGreyBackground } from "../../styles/colors";

export const FooterContainer = styled.div`
  padding: 1rem 0 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${lightGreyBackground};
  position: fixed;
  width: 100%;
  bottom: 0;
`;
