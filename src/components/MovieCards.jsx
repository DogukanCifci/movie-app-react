import React, { useContext } from "react";
import { CardImg } from "../styles/MovieCardsStyles";
import "../styles/MovieCards.css";
import { ContainerContext } from "../App";
import { useNavigate } from "react-router-dom";

const MovieCards = ({ item }) => {
  const { poster_path, title, overview, id } = item;
  const { user } = useContext(ContainerContext);
  const navigate = useNavigate();

  const toDetails = () => {
    user
      ? navigate("/moviedetail/" + id)
      : alert("You have to login firstly to see the details of films");
  };
  return (
    <div className="MovieCardsContainer" onClick={toDetails}>
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
