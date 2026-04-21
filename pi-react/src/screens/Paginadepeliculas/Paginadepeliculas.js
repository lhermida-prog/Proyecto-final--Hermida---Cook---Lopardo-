import React, { Component } from 'react'
import "./pagina.css"
import Buscador from '../../Components/Buscador/Buscador';
import Header from "../../Components/Header-Footer/Header"
import Footer from "../../Components/Header-Footer/Footer"
import Peliculas from '../../Components/Series y Pelicula/Card-Peliculas';
import { Link } from 'react-router-dom';

class PaginaPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [], 
    }

  }
  componentDidMount() {

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=5819e166bc6813d39312079be7ac67ba')
      .then(res => res.json())
      .then(data => this.setState(
        {
          datos: data.results
          
        })).catch(err => console.error(err));

  }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Buscador/>
         <h2 className="alert alert-primary">Todas las películas</h2>
        <button className="btn btn-info">Cargar más</button>
        <section className="row cards all-movies" id="movies">
            {this.state.datos === "" ? (
                <h3>Cargando...</h3>
            ):(
                this.state.datos.map((pelicula , idx) => <Peliculas
                key={pelicula + idx}
                id ={pelicula.id}
                tipo ="Película"
                lenguaje={pelicula.original_language}
                titulo_0={pelicula.original_title}
                descripcion={pelicula.overview}
                popularidad={pelicula.popularity}
                img={pelicula.poster_path}
                fecha={pelicula.release_date}
                titulo={pelicula.title}
                promedio={pelicula.vote_average}
                cantidad={pelicula.vote_count}/>)
            )}
        </section>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default PaginaPeliculas