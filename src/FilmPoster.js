import React from 'react'

function FilmPoster(props) { 

    // image=`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}` 

    return (
      <div> <img src={props.poster} alt="" /> </div>
    )
} 

export default FilmPoster
