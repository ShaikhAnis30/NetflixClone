import React, { useEffect, useState } from "react";
import "./Row.css";

import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();  /* called function here */
  }, [fetchUrl]);
  
  return (
    <div className = "row">
        <h2 className = "rowTitle">{title}</h2>
        <div className = "row__posters">
          {movies.map((movie) => (
              <img 
              key = {movie.id} 
              className = {`row__poster ${isLargeRow && "row__posterLarge"}`}
              src = {`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt = {movie.name}
                ></img>
            ))}
        </div>
    </div>
  );
}


export default Row;
