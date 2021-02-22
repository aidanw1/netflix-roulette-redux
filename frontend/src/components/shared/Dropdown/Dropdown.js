import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sortByTitle,
  sortByRuntime,
  sortByRating,
  sortByReleaseDate,
} from "../../../store/actions/moviesAction";
import {
  ReleaseDateContainer,
  DownIcon,
  MenuContainer,
  MenuTrigger,
  Menu,
} from "./DropdownStyles";

function Dropdown({ title, items, multiSelect = false }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  //SORT BY
  const [sortTitle, setSortTitle] = useState("Release Date");
  const { searchedMovies } = useSelector((state) => state.movies);

  const onClick = () => setIsActive(!isActive);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Initial movies:", searchedMovies);
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    // Unset event listener when dropdown is closed
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <MenuContainer>
      <MenuTrigger onClick={onClick}>
        <ReleaseDateContainer>
          <span>{sortTitle}</span>
          <DownIcon size={20} />
        </ReleaseDateContainer>
      </MenuTrigger>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li
            onClick={() => {
              setSortTitle("Release Date");
              setIsActive(false);
              dispatch(sortByReleaseDate(searchedMovies));
            }}
          >
            <a href="#">Release Date</a>
          </li>
          <li
            onClick={() => {
              setSortTitle("Rating");
              setIsActive(false);
              dispatch(sortByRating(searchedMovies));
            }}
          >
            <a href="#">Rating</a>
          </li>
          <li
            onClick={() => {
              setSortTitle("Run Time");
              setIsActive(false);
              dispatch(sortByRuntime(searchedMovies));
            }}
          >
            <a href="#">Run Time</a>
          </li>
          <li
            onClick={() => {
              setSortTitle("Title");
              setIsActive(false);
              dispatch(sortByTitle(searchedMovies));
            }}
          >
            <a href="#">Title</a>
          </li>
        </ul>
      </nav>
    </MenuContainer>
  );
}

export default Dropdown;
