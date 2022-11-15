import React, { useContext } from "react";
import { CardImg } from "../styles/MovieCardsStyles";
import "../styles/MovieCards.css";
import { ContainerContext } from "../App";
import { useNavigate } from "react-router-dom";

const MovieCards = ({ item }) => {
  const { poster_path, title, overview, id, vote_average } = item;
  const { user } = useContext(ContainerContext);
  const navigate = useNavigate();

  const toDetails = () => {
    if (!user) {
      alert("You have to login firstly to see film details");
    }
    navigate("/moviedetail/" + id);
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
        {user ? (
          <div
            style={
              vote_average > 7
                ? { backgroundColor: "green" }
                : { backgroundColor: "red" }
            }
            className="imdb"
          >
            {vote_average}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default MovieCards;
