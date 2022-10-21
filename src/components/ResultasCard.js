import React from 'react'
import { useMovieContext } from './context/GlobalContext'
import * as actions from "../components/ActionType";
import './ResultasCard.css'
const ResultasCard = ({ movie }) => {
    const MovieContext = useMovieContext();
    const storedMoviewatchlist = MovieContext.watchlist.find((o) => o.imdbID === movie.imdbID);
    const storedMoviewatched = MovieContext.watched.find((o) => o.imdbID === movie.imdbID);
    const WatchlistDisable = storedMoviewatchlist ? true : storedMoviewatched ? true : false;
    const WatchedDisable = storedMoviewatched ? true : false;


    return (
        <div className='result-card'>

            <div className='poster-warapper'>
                {movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> :
                    (
                        <div className='filter-poster'>



                        </div>


                    )
                }

            </div>
            <div className='info'>
                <div className='heading'>
                    <h3 className='title'>{movie.Title}</h3>
                    {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : "-"}
                </div>
                <div className='controls'>
                    <button onClick={() => MovieContext.Moviesdispatch(
                        {
                            type: actions.ADD_MOVIE_TO_WATCHLIST,
                            payload: movie,
                        }
                    )} className='btn'
                        disabled={WatchlistDisable}
                    >Add to Watch list</button>
                    <button onClick={() => MovieContext.Moviesdispatch(
                        {
                            type: actions.ADD_MOVIE_TO_WATCHED,
                            payload: movie,
                        }
                    )} className='btn'
                        disabled={WatchedDisable}>Add to Watch watched</button>
                </div>
            </div>

        </div>
    )
}

export default ResultasCard