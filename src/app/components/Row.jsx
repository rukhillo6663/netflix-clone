import React, { useEffect, useState } from 'react';
import '../styles/Row.css';
import axios from '../utils/axios';

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/original/';
  const fetchData = async () => {
    const request = await axios.get(fetchURL);
    const data = request.data.results;
    setMovies(data);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, [fetchURL]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          movie =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.poster_path)) && (
              <img
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                key={movie.id}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
