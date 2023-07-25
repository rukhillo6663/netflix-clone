import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';
import requests from '../Requests';
import axios from '../utils/axios';

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    const data = request.data.results;
    setMovie(data[Math.floor(Math.random() * data.length - 1)]);
    return request;
  };
  const fetchMovies = async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    const data = request.data.results;
    setMovies(data);
    return request;
  };

  useEffect(() => {
    fetchData();
    fetchMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    }, 10000);
    return () => clearInterval(interval);
  }, [movie]);

  console.log(movies);

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + '...' : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
