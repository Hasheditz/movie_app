import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';
const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=774c6a0e'
 
const App = () => {

    const [movies , setmovies] = useState([]);
    const [searchterm , setsearchterm] = useState(" ");

        const searchmovie = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setmovies(data.Search);
        }

        useEffect(() => {
        searchmovie('marvel')
        } , [] );

        return(
            <div className='app'>
                <h1>Movie porn</h1>
                <div className='search'>
                    <input 
                    placeholder='secrch for movies'
                    value={searchterm}
                    onChange={(e) => setsearchterm(e.target.value)}
                    />

                    <img 
                    src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                    alt='images'
                    style={{backgroundColor:"#ab9481", padding:"8px",borderRadius:"50%"}}
                    onClick={() => searchmovie(searchterm)}
                    />
                </div>

                {
                    movies?.length > 0
                    ?(
                        <div className='container'>
                            {movies.map( (movie) => (
                                <MovieCard movie = {movie} />
                            ))}
                    </div>
                    ) :
                    (
                        <div className='empty'>
                            <h2>No movies Found</h2>
                        </div>
                    )

                }

            </div>
        );
 }
export default App;