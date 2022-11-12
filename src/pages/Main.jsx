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
  //Dededen Veri Cekme====
  const { getData, setMovieUserSearchInput, data, user } =
    useContext(ContainerContext);
  console.log(data);

  const sendFunction = () => {
    getData();
  };

  //Search Button Onclicked====
  const searchButtonClicked = () => {
    if (user) {
      sendFunction();
      console.log("No problem");
    } else {
      alert("You have to login to search a film!");
    }
  };
  //======KARTA TIKLANDIGINDA USER CONTROL ======

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
              element.keyCode === 13 ? searchButtonClicked() : undefined
            }
          />
          <SearchButton onClick={searchButtonClicked}>Search</SearchButton>
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
