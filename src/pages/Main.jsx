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
import Navbar from "../components/Navbar";

const Main = () => {
  const { getData, setMovieUserSearchInput, data } =
    useContext(ContainerContext);
  console.log(data);
  const sendFunction = () => {
    getData();
  };

  return (
    <>
      <Navbar />
      <MainContainer>
        <MovieSearchPart>
          <SearchInput
            type="text"
            placeholder="Search a movie"
            id="userSearch"
            onChange={(event) => setMovieUserSearchInput(event.target.value)}
            onKeyDown={(element) =>
              element.keyCode === 13 ? sendFunction() : undefined
            }
          />
          <SearchButton onClick={sendFunction}>Search</SearchButton>
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
    </>
  );
};
export default Main;
