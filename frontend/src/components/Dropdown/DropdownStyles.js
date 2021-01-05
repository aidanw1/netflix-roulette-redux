import styled from "styled-components";

import { grey, brightRed } from "../../styles/colors";
import { BsCaretDownFill } from "react-icons/bs";

export const ReleaseDateContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DownIcon = styled(BsCaretDownFill)`
  color: ${brightRed};
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ul li {
    font-size: 1.4rem;
    font-weight: bold;
    color: red;
  }

  ul li a:hover {
    color: ${brightRed};
  }
`;

export const MenuTrigger = styled.button`
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto; /* Strictly for positioning */
  color: #fff;
  span {
    text-transform: uppercase;
    font-size: 2.6rem;
    font-weight: 700;
    vertical-align: middle;
    margin-right: 10px;
    font-size: 14px;
  }
`;

export const Menu = styled.div`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;
//   .menu {
//     background: #ffffff;
//     border-radius: 8px;
//     position: absolute;
//     top: 60px;
//     right: 0;
//     width: 300px;
//     box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
//     opacity: 0;
//     visibility: hidden;
//     transform: translateY(-20px);
//     transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
//   }

//   .menu.active {
//     opacity: 1;
//     visibility: visible;
//     transform: translateY(0);
//     z-index: 1;
//   }

//   .menu ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   .menu li {
//     border-bottom: 1px solid #dddddd;
//   }

//   .menu li a {
//     text-decoration: none;
//     color: #333333;
//     padding: 15px 20px;
//     display: block;
//   }
