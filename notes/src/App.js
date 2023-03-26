import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import ReviewForm from './components/ReviewForm';

const App = () => {
  const [movies, setMovies] = useState([ ]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=${searchValue}&apikey=6de88922';

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(()=>{
    getMovieRequest();
  }, []);

  return (
    <div className='container-fluid movie-app'>
      <div>
        <MovieList movies={movies} />
        <ReviewForm/>
      </div>
    </div>
  );
};




export default App;
