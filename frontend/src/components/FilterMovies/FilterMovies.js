import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSorted } from "../../store/actions/moviesAction";
import Dropdown from "../shared/Dropdown/Dropdown";
import {
  MoviesFound,
  FilterMoviesContainer,
  Categories,
  SortBy,
  SortByTitle,
  SortContainer,
} from "./FilterMoviesStyles";

const FilterMovies = () => {
  const [tabState, setTabState] = useState({
    activeObject: null,
    objects: [
      { id: 1, title: "All", genre: "" },
      { id: 2, title: "Drama", genre: "drama" },
      { id: 3, title: "Adventure", genre: "adventure" },
      { id: 4, title: "Action", genre: "Action" },
      { id: 5, title: "Family", genre: "Family" },
      { id: 6, title: "Fantasy", genre: "Fantasy" },
    ],
  });

  const { allMovies, searchedMovies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  const toggleActive = useCallback(
    (index) => {
      setTabState({ ...tabState, activeObject: tabState.objects[index] });
    },
    [tabState]
  );

  const toggleActiveStyles = useCallback(
    (index) => {
      if (tabState.objects[index] === tabState.activeObject) {
        return "active_genre";
      }
    },
    [tabState]
  );

  return (
    <>
      <FilterMoviesContainer>
        <SortContainer>
          <Categories>
            <>
              {tabState.objects.map((element, index) => (
                <div
                  key={index}
                  className={toggleActiveStyles(index)}
                  onClick={() => {
                    toggleActive(index);
                    dispatch(fetchSorted(element.genre));
                  }}
                >
                  {element.title}
                </div>
              ))}
            </>
          </Categories>
          <SortBy>
            <SortByTitle>Sort By</SortByTitle>
            <Dropdown />
          </SortBy>
        </SortContainer>

        <MoviesFound>
          <span>{searchedMovies && searchedMovies.length}</span> movies found
        </MoviesFound>
      </FilterMoviesContainer>
    </>
  );
};

export default FilterMovies;
