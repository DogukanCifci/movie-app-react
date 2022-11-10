import React from "react";
import { CardImg } from "../styles/MovieCardsStyles";
import "../styles/MovieCards.css";
const MovieCards = ({ item }) => {
  const { poster_path, title, overview } = item;
  return (
    <div className="MovieCardsContainer">
      <div className="Cards">
        <div className="ImageContainer" data-tooltip={overview}>
          <CardImg
            className="CardImg"
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          />
        </div>
        <div className="CardTitle">{title}</div>
      </div>
    </div>
  );
};
export default MovieCards;
