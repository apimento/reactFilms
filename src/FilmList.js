import React, { Component } from 'react'   
import FilmRow from './FilmRow'

export default class FilmList extends Component {  


constructor(props){ 
  super(props)  

  this.state = {
    filter: "all" 
}
}

  handleFilterClick(filter){  
    this.setState({ 
     filter: `${filter}`
    })
    console.log(`Setting filter to ${filter}`)

  }


  render() {   
    // console.log(` ${this.props.handleDetailsClick} `)

    let allFilms;
    if (this.state.filter === "all") {  

      allFilms = this.props.films.map((film) => {   
        return (
        <FilmRow 
        handleDetailsClick ={this.props.handleDetailsClick}
        film={film}
        key={film.id} 
        isFave = {this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film) }
        />
      )
      })
    } else { 
      allFilms = this.props.faves.map((film) => {   
        return (
        <FilmRow 
        handleDetailsClick ={this.props.handleDetailsClick}
        film={film}
        key={film.id} 
        isFave = {this.props.faves.includes(film)}
        onFaveToggle={() => this.props.onFaveToggle(film) }
        />
      )
      })
    }
    return (
      <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
        </div>
    </div>

    {allFilms}
</div>
    )
  }
}
