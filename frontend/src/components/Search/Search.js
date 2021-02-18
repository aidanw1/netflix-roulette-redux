import React, { useState } from "react";
import { Button } from "../../styles/button-styles";
import { SearchContainer } from "./SearchStyles";
import { fetchSearch } from "../../store/actions/moviesAction";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <SearchContainer>
      <input
        value={textInput}
        onChange={inputHandler}
        placeholder="What do you want to watch?"
        type="text"
      />
      <Button
        onClick={textInput.length ? submitSearch : null}
        type="submit"
        primary
      >
        SEARCH
      </Button>
    </SearchContainer>
  );
};

export default Search;
