import React, { useState, useEffect } from "react";
import instance from "./axios";
import "./Row.css";

// baseurl in api document to show the Photos, used in img url
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //instance.get  will get the baseURL, and append the request endpoint
      const response = await instance.get(fetchUrl);
      // here will see the response objects which contains array(data)
      // console.log(request)
      setmovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  //this is a good practice to confirm comeback response
  //   console.log(movies)

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {/* several row posters here*/}
        {movies.map((movie) => (
          <img
            className="row-poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
