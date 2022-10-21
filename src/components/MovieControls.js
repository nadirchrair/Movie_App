import React, { Fragment } from 'react'
import { useMovieContext } from "./context/GlobalContext"
import * as actios from "./ActionType"
import './moviecard.css'
const MovieControls = ({ movie, type }) => {
    const Moviecontext = useMovieContext()
    return (
        <div className="inner-card-controls">
            {
                type === "watchlist" && (
                    <Fragment>
                        <button onClick={() => Moviecontext.Moviesdispatch({
                            type: actios.ADD_MOVIE_TO_WATCHED,
                            payload: movie


                        })} className='ctr-btn'>
                            <i className='fa-solid fa-eye' />

                        </button>
                        <button onClick={() => Moviecontext.Moviesdispatch({
                            type: actios.REMOVE_MOVIE_TO_WATCHLIST,
                            payload: movie.imdbID

                        })} className='ctr-btn'>
                            <i className='fa-fw fa fa-times' />

                        </button>
                    </Fragment>
                )
            }
            {
                type === "watched" && (
                    <Fragment>
                        <button className='ctr-btn' onClick={() => Moviecontext.Moviesdispatch({
                            type: actios.MOVE_TO_WATCHLIST,
                            payload: movie


                        })}>
                            <i className="fa-solid fa-eye-slash" />

                        </button>
                        <button className='ctr-btn' onClick={() => Moviecontext.Moviesdispatch({
                            type: actios.REMOVE_MOVIE_TO_WATCHED,
                            payload: movie.imdbID
                        })}>
                            <i className='fa-fw fa fa-times' />

                        </button>
                    </Fragment>
                )
            }
        </div>
    )
}

export default MovieControls