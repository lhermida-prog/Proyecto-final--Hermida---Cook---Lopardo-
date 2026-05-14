import React, { useState, useEffect } from 'react'
import Peliculas from '../Series y Pelicula/Card-Peliculas';
import Series from '../Series y Pelicula/Card-Series';
import { Link } from 'react-router-dom';

function Secciones(props) {
  const [datos, setDatos] = useState([])
  const [peliculas_cartel, setPeliculasCartel] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5819e166bc6813d39312079be7ac67ba')
      .then(res => res.json())
      .then(data => setDatos(data.results.slice(0, 4),))
      .catch(err => console.error(err));

    fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=5819e166bc6813d39312079be7ac67ba")
      .then(res => res.json())
      .then(data => setPeliculasCartel(data.results.slice(0,4),))
      .catch(err => console.log(err));
  }, [])
    return (
      <React.Fragment>
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <Link to="/vermaspeliculas"><button>Ver Todas</button></Link>
        <section className="row cards all-movies" id="movies">
          {datos === "" ? (
            <h3>Cargando...</h3>
          ) : (
            datos.map((peli, idx) => <Peliculas key={peli + idx}
              id={peli.id}
              tipo="Película"
              lenguaje={peli.original_language}
              titulo_0={peli.original_title}
              descripcion={peli.overview}
              popularidad={peli.popularity}
              img={peli.poster_path}
              name={peli.name}
              fecha={peli.release_date}
              titulo={peli.title}
              promedio={peli.vote_average}
              cantidad={peli.vote_count} />)
          )}
        </section>
        <h2 className="alert alert-warning">TV shows airing today</h2>
        <Link to="/vermasseries"><button>Ver Todas</button></Link>
        <section className="row cards all-movies" id="movies">
          {peliculas_cartel === "" ? (
            <h3>Cargando...</h3>
          ) : (
            peliculas_cartel.map((peli, idx) => <Series
              key={peli + idx}
              id={peli.id}
              tipo="Película"
              lenguaje={peli.original_language}
              titulo_0={peli.original_title}
              descripcion={peli.overview}
              popularidad={peli.popularity}
              img={peli.poster_path}
              fecha={peli.release_date}
              titulo={peli.name}
              promedio={peli.vote_average}
              cantidad={peli.vote_count} />)
          )}


        </section>
      </React.Fragment>
    )
  }

export default Secciones

