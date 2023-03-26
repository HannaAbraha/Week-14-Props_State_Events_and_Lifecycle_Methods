import React from 'react';
import Stars from './stars';
import axios from 'axios'
import React, {Fragment, useEffect, useState} from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';
import NoImg from './NoImage.jpg'
import ReviewList from './review-list';
import ReviewForm from './review-form';

function Movies() {
    const [moviesData, setMoviesData] = useState([]);
    const Api = 'http://www.omdbapi.com/?s=${searchValue}&apikey=6de88922';
    const Images = <img src={Movies.poster} alt='movie'></img>;
    const {title, image, synopsis, rating, reviews} = this.props.movie;

    const MovieCall = async () => {
        const data = await axios.get(Api,{
            params: {
                api_key: '',
            }
        })
        const results = data.data.results
        setMoviesData(results)
    }
    useEffect(() => {
        MovieCall()
    }, [])
    console.log(moviesData)
    return (
        <Fragment>
            <div id='container'>
            <h2>title</h2>
            <p>synopsis</p>
            <AiFillPlayCircle color='green' fontsize={40} id="playIcon"/>
            <img src={moviesData.poster_path ?`${Images}${moviesData.poster_path}` : NoImg} alt=''/>
            </div>
        </Fragment>
    )
}

export default Movies