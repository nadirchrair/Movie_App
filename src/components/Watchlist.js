import React from 'react'
import { useMovieContext } from './context/GlobalContext'
import MovieCard from './MovieCard';
import './watchlist.css'
const Watchlist = () => {
  const Moviecontext = useMovieContext();

  return (
    <div className='watch-list'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My watchlist</h1>
          <span className='movies-count'>{Moviecontext.watchlist.length}</span>

        </div>
        {Moviecontext.watchlist.length > 0 ? (<div className='movie-grid'>
          {
            Moviecontext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))
          }
        </div>) : <h2>No Movie in your list</h2>}

      </div>

    </div>
  )
}

export default Watchlist