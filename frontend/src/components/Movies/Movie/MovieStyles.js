import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import {
  darkWhite,
  grey,
  blackBackground,
  brightRed,
} from "../../../styles/colors";

export const MovieContainer = styled.div`
  display: grid;
  justify-content: center;
  margin: 1rem 0;
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  color: ${darkWhite};
  font-weight: 400;
`;

export const Description = styled.div`
  font-size: 1.3rem;
  color: ${grey};
  font-weight: 400;
`;

export const Year = styled.div`
  border: 1px solid ${darkWhite};
  padding: 0.25rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.3rem;
  color: ${darkWhite};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const EditIcon = styled(BsThreeDotsVertical)`
  display: none;
  position: absolute;
  right: 10px;
  top: 5px;
  background-color: ${blackBackground};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 5px;
  cursor: pointer;
  color: white;
`;

export const MovieImageContainer = styled.div`
  position: relative;
  &:hover ${EditIcon} {
    display: block;
  }
`;

export const MovieImage = styled.img`
  height: 40rem;
  cursor: pointer;
`;

export const EditBox = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 60%;
`;

export const EditBoxContent = styled.div`
  border-radius: 5px;
  position: relative;
  background-color: ${blackBackground};
  padding-top: 23px;
`;

export const Edit = styled.div`
  padding: 5px 0 5px 10px;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background-color: ${brightRed};
  }
`;

export const Delete = styled(Edit)`
  padding-bottom: 5px;
`;

export const ModalCloseIcon = styled(GrClose)`
  position: absolute;
  top: 7px;
  right: 10px;
  cursor: pointer;
  path {
    stroke: white;
  }
`;
