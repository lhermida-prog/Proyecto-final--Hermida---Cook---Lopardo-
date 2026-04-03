import React, { Component } from 'react'
import Pelicula from "../../Components/Pelicula/Pelicula";

class PaginaPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],

    }
  }
  componentDidMount() {

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5819e166bc6813d39312079be7ac67ba')
      .then(res => res.json())
      .then(data => this.setState(
        {
          datos: data.results,
          
        }))

      .catch(err => console.error(err));
  }


  render() {
    return (
      <React.Fragment>
        <section className="row cards all-movies" id="movies">
          {this.state.datos === "" ? (
            <h3>Cargando...</h3>
          ):(
            this.state.datos.map(peli => <Pelicula
            key ={peli.id}
            id ={peli.id}
            lenguaje = {peli.original_language}
            titulo_o = {peli.original_title}
            detalle ={peli.overview}
            popularidad = {peli.popularity}
            img ={peli.poster_path}
            fecha ={peli.release_date}
            titulo ={peli.title}
            video ={peli.video}
            promedio ={peli.vote_average}
            cantidad ={peli.vote_count}/>)
          )}
        </section>
      </React.Fragment>
    )
  }
}

export default PaginaPeliculas

