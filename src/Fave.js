import React, { Component } from 'react'

export default class Fave extends Component {

    // state={ 
    // isFave: false
    // }



    handleFaveClick = (e) => {  
        e.stopPropagation() 
        console.log("Handling Fave click!") 
        this.props.onFaveToggle()

    }


  render() {  
    
    return (
        // <div className="film-row-fave add_to_queue" onClick={this.handleFaveClick} > 
        <div className={`film-row-fave ${this.props.isFave === false ? 'add_to_queue' : 'remove_from_queue'}`} onClick={this.handleFaveClick}>
        <p className="material-icons">{this.props.isFave === false ? 'add_to_queue' : 'remove_from_queue'}</p>
      </div>
    )
  }
}
