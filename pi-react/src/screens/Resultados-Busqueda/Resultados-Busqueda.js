import React, { Component } from "react";
import Peliculas from "../../Components/Series y Pelicula/Card-Peliculas";
import Series from "../../Components/Series y Pelicula/Card-Series";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";

class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
    };
  }

  componentDidMount() {

    let valor = this.props.match.params.valor
    let eleccion = this.props.match.params.eleccion

    let url = ""

    if (eleccion === "movie") {
      url = `https://api.themoviedb.org/3/search/movie?api_key=5819e166bc6813d39312079be7ac67ba&query=${valor}`;
    }
    else {
      url = `https://api.themoviedb.org/3/search/tv?api_key=5819e166bc6813d39312079be7ac67ba&query=${valor}`
    }

    fetch(url)
      .then(res => res.json())
      .then((data) =>
        this.setState({
          datos: data.results
        }))
      .catch((err) => console.log(err))

  }

  render() {

    let eleccion = this.props.match.params.eleccion

    if (eleccion === "movie") {
      return (
        <React.Fragment>
          <Header />
          <div className="container">
            <h2 className="alert alert-primary">Resultados</h2>
            <section className="row cards">
              {this.state.datos.map((peli, idx) => (
                <Peliculas
                  key={peli + idx}
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
                  cantidad={peli.vote_count}
                />
              ))}
            </section>
          </div>
          <Footer />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <div className="container">
            <h2 className="alert alert-primary">Resultados</h2>
            <section className="row cards">
              {this.state.datos.map((peli, idx) => (
                <Series
                  key={peli + idx}
                  id={peli.id}
                  tipo="Serie"
                  lenguaje={peli.original_language}
                  titulo_0={peli.original_name}
                  descripcion={peli.overview}
                  popularidad={peli.popularity}
                  img={peli.poster_path}
                  fecha={peli.first_air_date}
                  titulo={peli.name}
                  promedio={peli.vote_average}
                  cantidad={peli.vote_count}
                />
              ))}
            </section>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }

}
export default ResultadosBusqueda;
