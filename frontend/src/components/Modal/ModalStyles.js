import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { blackBackground } from "../../styles/colors";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalContainer = styled.div`
  position: relative;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${blackBackground};
  padding: 10px 20px;
  z-index: 1000;
  width: 35vw;
`;

export const ModalCloseIcon = styled(GrClose)`
  position: absolute;
  right: 10px;
  cursor: pointer;
  path {
    stroke: white;
  }
`;
