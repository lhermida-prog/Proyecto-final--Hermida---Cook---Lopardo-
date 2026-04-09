import React, { Component } from 'react'
import Pelicula from "../../Components/Pelicula/Pelicula";

class PaginaPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      peliculas_cartel: [], 

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

      fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5819e166bc6813d39312079be7ac67ba")
      .then(res => res.json())
      .then(data => {this.setState(
        {
        peliculas_cartel: data.results
      })})
     .catch(err => console.log(err));
  }


  render() {
    return (
      <React.Fragment>
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <section className="row cards all-movies" id="movies">
          {this.state.datos === "" ? (
            <h3>Cargando...</h3>
          ):(
            this.state.datos.map(peli => <Pelicula
            key ={peli.id}
            id ={peli.id}
            lenguaje = {peli.original_language}
            titulo_o = {peli.original_title}
            descripcion ={peli.overview}
            popularidad = {peli.popularity}
            img ={peli.poster_path}
            fecha ={peli.release_date}
            titulo ={peli.title}
            video ={peli.video}
            promedio ={peli.vote_average}
            cantidad ={peli.vote_count}/>)
          )}
        </section>
        <h2 class="alert alert-warning">TV shows airing today</h2>
        <section className="row cards all-movies" id="movies">
          {this.state.peliculas_cartel === "" ? (
            <h3>Cargando...</h3>
          ):(
            this.state.peliculas_cartel.map(peli => <Pelicula
            key ={peli.id}
            id ={peli.id}
            lenguaje = {peli.original_language}
            titulo_o = {peli.original_title}
            descripcion ={peli.overview}
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

