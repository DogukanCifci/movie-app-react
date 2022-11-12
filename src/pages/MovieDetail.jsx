//import axios from "axios";

import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ContainerContext } from "../App";
import Navbar from "../components/Navbar";
import {
  DetailsPart,
  DownLeftPart,
  DownRightPart,
  MovieDetailContainer,
  VideoParts,
} from "../styles/MovieDetailStyles";
const MovieDetail = () => {
  //En büyük dededen veri alma
  const { detaylar, videoSrc } = useContext(ContainerContext);
  //Tiklanan filmin bilgilerini babadan state ile gönderdik
  const location = useLocation();
  const filmCard = location.state.item;
  console.log(filmCard);
  console.log("DETAYLAR : ", detaylar);
  console.log(videoSrc);
  console.log("ITEM : ", filmCard);
  const imgSrc = `https://image.tmdb.org/t/p/w1280${filmCard.poster_path}`;
  return (
    <>
      <Navbar />
      <MovieDetailContainer>
        <VideoParts></VideoParts>
        <DetailsPart>
          <DownLeftPart>
            <img src={imgSrc} alt="" />
          </DownLeftPart>
          <DownRightPart>
            <div>
              <h3
                style={{
                  color: "black",
                  marginBottom: "10px",
                }}
              >
                Overview
              </h3>
              <p>{filmCard.overview}</p>
            </div>
            <div>
              <p>
                <span
                  style={{
                    color: "black",
                    fontWeight: "800",
                    marginRight: "10px",
                  }}
                >
                  Release Date :
                </span>
                {filmCard.release_date}
              </p>
              <p>
                <span
                  style={{
                    color: "black",
                    fontWeight: "800",
                    marginRight: "10px",
                  }}
                >
                  Vote Count :
                </span>
                {filmCard.vote_count}
              </p>
              <p>
                <span
                  style={{
                    color: "black",
                    fontWeight: "800",
                    marginRight: "10px",
                  }}
                >
                  Rate :
                </span>
                {filmCard.vote_average.toFixed(1)}{" "}
              </p>
            </div>
          </DownRightPart>
        </DetailsPart>
      </MovieDetailContainer>
    </>
  );
};
export default MovieDetail;
