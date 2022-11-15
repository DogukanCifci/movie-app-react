//import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  DetailsPart,
  DownLeftPart,
  DownRightPart,
  MovieDetailContainer,
  MyLink,
  VideoParts,
} from "../styles/MovieDetailStyles";
const MovieDetail = () => {
  const [videoKey, setVideoKey] = useState("");
  const [movieDetails, setMovieDetails] = useState([]);

  const { id } = useParams();

  //======VERI cekme islemi
  useEffect(() => {
    fetch(detailUrl)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));

    fetch(videoUrl)
      .then((res) => res.json())
      .then((data) => setVideoKey(data.results[0].key));
  }, []);
  console.log("VIDEO Key", videoKey);
  const { overview, release_date, vote_count, vote_average, poster_path } =
    movieDetails;
  console.log(movieDetails);
  //DEGISKENLER-URLs====
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const ImgSrc = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  const videoSrc = `https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=0`;
  return (
    <>
      <Navbar />
      <MovieDetailContainer>
        <VideoParts>
          {videoKey ? (
            <iframe
              width="660"
              height="315"
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            ""
          )}
        </VideoParts>
        <DetailsPart>
          <DownLeftPart>
            <img src={ImgSrc} alt="" />
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
              <p>{overview}</p>
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
                {release_date}
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
                {vote_count}
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
                {vote_average}
              </p>
              <MyLink to={-1}>Go Back</MyLink>
            </div>
          </DownRightPart>
        </DetailsPart>
      </MovieDetailContainer>
    </>
  );
};
export default MovieDetail;
