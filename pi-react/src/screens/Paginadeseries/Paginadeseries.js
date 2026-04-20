import React, { Component } from "react";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";
import Buscador from "../../Components/Buscador/Buscador";
import Series from "../../Components/Series y Pelicula/Card-Series";
import "./paginaseries.css"


class PaginaSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
    }
  }
  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=5819e166bc6813d39312079be7ac67ba")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          datos: data.results,
        })
        
      })
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <Buscador />
          <h2 className="alert alert-warning">Todas las series</h2>
          <section className="row cards all-series">
            {this.state.datos === "" ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.datos.map((serie, idx) => <Series
                key={serie + idx}
                id={serie.id}
                tipo="Serie"
                lenguaje={serie.original_language}
                nombre={serie.original_name}
                descripcion={serie.overview}
                popularidad={serie.popularity}
                img={serie.poster_path}
                fecha={serie.first_air_date}
                titulo={serie.title}
                name={serie.name}
                promedio={serie.vote_average}
                cantidad={serie.vote_count} />)
            )}
          </section>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default PaginaSeries