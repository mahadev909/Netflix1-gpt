import React from 'react'
import {TMDB_IMG_URL} from '../Utils/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='p-2 w-48 cursor-pointer'>
        <img src={TMDB_IMG_URL+ poster_path} alt='movie_img'/>
    </div>
  )
}

export default MovieCard