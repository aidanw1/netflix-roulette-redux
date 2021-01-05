import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSorted } from "../../actions/moviesAction";
import Dropdown from "../Dropdown/Dropdown";
import {
  MoviesFound,
  FilterMoviesContainer,
  Categories,
  SortBy,
  SortByTitle,
  SortContainer,
  ReleaseTitle,
  ReleaseDateContainer,
  DownIcon,
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

  function toggleActive(index) {
    setTabState({ ...tabState, activeObject: tabState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (tabState.objects[index] === tabState.activeObject) {
      return "active_genre";
    }
  }

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
              {/* <div
                onClick={() => {
                  dispatch(fetchSorted(AllGenre));
                }}
              >
                All
              </div>
              <div
                onClick={() => {
                  dispatch(fetchSorted(DramaGenre));
                }}
              >
                Drama
              </div>
              <div onClick={() => dispatch(fetchSorted(AdventureGenre))}>
                Adventure
              </div>
              <div onClick={() => dispatch(fetchSorted(ActionGenre))}>
                Action
              </div>
              <div onClick={() => dispatch(fetchSorted(FamilyGenre))}>
                Family
              </div>
              <div onClick={() => dispatch(fetchSorted(FantasyGenre))}>
                Fantasy
              </div> */}
            </>
          </Categories>
          <SortBy>
            <SortByTitle>Sort By</SortByTitle>
            <Dropdown />
            {/* <ReleaseDateContainer>
              <ReleaseTitle>Release Date</ReleaseTitle>
              <DownIcon size={15} />
            </ReleaseDateContainer> */}
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
