import { useContext } from "react";
import { ContainerContext } from "../App";
import MovieCards from "../components/MovieCards";
import {
  MovieCardsContainer,
  MovieShowsPart,
} from "../styles/MovieCardsStyles";

import {
  MainContainer,
  MovieSearchPart,
  SearchButton,
  SearchInput,
} from "../styles/MainStyles";

const Main = () => {
  const { getData, setMovieUserSearchInput, data } =
    useContext(ContainerContext);
  console.log(data);
  return (
    <MainContainer>
      <MovieSearchPart>
        <SearchInput
          type="text"
          placeholder="Search a movie"
          onChange={(event) => setMovieUserSearchInput(event.target.value)}
        />
        <SearchButton onClick={getData}>Search</SearchButton>
      </MovieSearchPart>
      <MovieShowsPart>
        {data.map((e, index) => (
          <MovieCardsContainer key={index}>
            {e.results.map((item, idx) => (
              <MovieCards key={idx} item={item} />
            ))}
          </MovieCardsContainer>
        ))}
      </MovieShowsPart>
    </MainContainer>
  );
};
export default Main;
