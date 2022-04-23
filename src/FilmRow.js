import React from 'react' 
import Fave from './Fave'
import FilmPoster from './FilmPoster'  




function FilmRow(props) { 

    let image= `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`  

    // handleDetailsClick(film){ 
    //     console.log(`Handle details for ${this.props.film.title}`) 
    // }



    // console.log(this.props.film)
    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
            <FilmPoster poster = {image} />
            {/* <FilmPoster> {this.image} </FilmPoster> */}
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.substring(0,4)}</p>
            </div> 
        <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle}/>
        </div>
      
    )
  }

  export default FilmRow
