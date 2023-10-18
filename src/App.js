import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 4ac93ca9

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4ac93ca9';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  // async data -> takes time to fetch movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    // get the search value
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='App'>
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => {setSearchTerm(event.target.value)}} />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div> //if movie array empty
        )

      }
    </div>
  );
}

export default App;