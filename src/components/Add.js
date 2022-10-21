import React, { useState, useEffect } from 'react';
import './add.css';
import axios from "axios";
import ResultasCard from './ResultasCard';
const Add = () => {
    const [searchvalue, setSearchvalue] = useState("");
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${searchvalue}&apikey=16356aef`).then((response) => {

            if (response.data.Search) {
                setMovies(response.data.Search);
            }


        }).catch((error) => console.log(error));


    }, [searchvalue]);
    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-container'>
                        <input type="text"
                            placeholder="search Movies"
                            value={searchvalue}
                            onChange={(e) => setSearchvalue(e.target.value)}
                        />
                    </div>
                    {
                        movies.length > 0 && (<ul className='results'>
                            {movies.map((movie) => (
                                <li key={movie.imdbID}>{<ResultasCard movie={movie} />}</li>
                            )
                            )
                            }
                        </ul>)
                    }
                </div>

            </div>

        </div>
    )
}

export default Add