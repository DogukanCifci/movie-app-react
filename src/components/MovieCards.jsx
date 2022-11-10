import React from "react";
import { CardImg } from "../styles/MovieCardsStyles";
import "../styles/MovieCards.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContainerContext } from "../App";
const MovieCards = ({ item }) => {
  const { poster_path, title, overview } = item;
  const navigate = useNavigate();
  const { detayliVeriCekme } = useContext(ContainerContext);
  //APP.JS'E GÖNDERME FONKSIYONU ve id ile detayli veri cekme islemi
  const detailsClicked = () => {
    navigate("/moviedetail", { state: { item } });
    detayliVeriCekme(item.id);
  };
  return (
    <div className="MovieCardsContainer" onClick={detailsClicked}>
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
