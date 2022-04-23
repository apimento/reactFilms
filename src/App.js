import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmList from './FilmList.js'; 
import TMDB from './TMDB.js'; 
import axios from "axios"


class App extends Component { 

  state={ 
    films: TMDB.films,
    faves:[],
    current: ""
  }
 
  handleFaveToggle = (film) => { 
    let faves = this.state.faves.slice() 
    const filmIndex = faves.indexOf(film) 
    if (faves.includes(film)) { 
      faves.splice(filmIndex, 1)
    } else { 
      faves.push(film)
    } 
    this.setState({faves}) 
    console.log(` ${film.title} was added to faves`)
  }

  handleDetailsClick = (film) => {   
    // console.log(`${film}`)
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en` 
    
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response)  
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data }) 
      
    })
    
  }


  render() { 
    return (
      <div className="App" >
        <div className="film-library">
          <FilmList films={TMDB.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle} handleDetailsClick={this.handleDetailsClick}/>
          <FilmDetails film={this.state.current}/>  
         
        </div>
      </div>
    );
  }
}

export default App;
