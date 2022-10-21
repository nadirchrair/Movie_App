import React from 'react'
import { useMovieContext } from './context/GlobalContext'
import MovieCard from './MovieCard';
import './watchlist.css'
const Watched = () => {
  const Moviecontext = useMovieContext();

  return (
    <div className='watch-list'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My watched</h1>
          <span className='movies-count'>{Moviecontext.watched.length}</span>

        </div>
        {Moviecontext.watched.length > 0 ? (<div className='movie-grid'>
          {
            Moviecontext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))
          }
        </div>) : <h2>No Movie watched in your list</h2>}

      </div>

    </div>)
}

export default Watched