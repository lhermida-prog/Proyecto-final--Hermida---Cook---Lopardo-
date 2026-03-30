import React from "react";
import React, { Component } from 'react'
import Pelicula from "../Pelicula/Pelicula";

class PaginaPeliculas extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
  render() {
    return (
      <React.Fragment>
         <section className="row cards all-movies" id="movies">
            <Pelicula/>
         </section>
      </React.Fragment>
    )
  }
}

export default PaginaPeliculas 

