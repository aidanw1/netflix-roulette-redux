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
} from "./DropdownStyles";

function Dropdown() {
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

  const links = [
    { label: "Release Date", sortFn: sortByReleaseDate },
    { label: "Rating", sortFn: sortByRating },
    { label: "Run Time", sortFn: sortByRuntime },
    { label: "Title", sortFn: sortByTitle },
  ];

  const linkClicked = (link) => {
    setSortTitle(link.label);
    setIsActive(false);
    dispatch(link.sortFn(searchedMovies));
  };

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
          {links.map((link) => (
            <li onClick={() => linkClicked(link)}>
              <a href="#">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </MenuContainer>
  );
}

export default Dropdown;
