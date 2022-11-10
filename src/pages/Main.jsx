import { useContext } from "react";
import { ContainerContext } from "../App";
import {
  MainContainer,
  MovieSearchPart,
  SearchButton,
  SearchInput,
} from "../styles/MainStyles";

const Main = () => {
  const { getData, setMovieUserSearchInput } = useContext(ContainerContext);
  const searchClicked = () => {
    getData();
  };
  return (
    <MainContainer>
      <MovieSearchPart>
        <SearchInput
          type="text"
          placeholder="Search a movie"
          onChange={(event) => setMovieUserSearchInput(event.target.value)}
        />
        <SearchButton onClick={searchClicked}>Search</SearchButton>
      </MovieSearchPart>
    </MainContainer>
  );
};
export default Main;
