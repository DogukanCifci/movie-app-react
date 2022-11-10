import React from "react";
import {
  CardImg,
  Cards,
  CardTitle,
  MovieCardsContainer,
} from "../styles/MovieCardsStyles";

const MovieCards = ({ item }) => {
  console.log(item);
  return (
    <MovieCardsContainer>
      <Cards>
        <CardImg src={item.backdrop_path} />
        <CardTitle>{item.title}</CardTitle>
      </Cards>
    </MovieCardsContainer>
  );
};
export default MovieCards;
