import React,{Component} from "react";
import { Link } from "react-router-dom";
import Peliculas from "../../Components/Series y Pelicula/Card-Peliculas";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";

class Vermas_peliculas extends Component {
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
        <Header/>
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <section className="row cards all-movies" id="movies">
          {this.state.datos === "" ? (
            <h3>Cargando...</h3>
          ) : (
              this.state.datos.map((peli , idx) => <Peliculas key= {peli + idx}
                id ={peli.id}
                tipo ="Película"
                lenguaje={peli.original_language}
                titulo_0={peli.original_title}
                descripcion={peli.overview}
                popularidad={peli.popularity}
                img={peli.poster_path}
                name = {peli.name}
                fecha={peli.release_date}
                titulo={peli.title}
                promedio={peli.vote_average}
                cantidad={peli.vote_count}/>)
          )}
        </section>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Vermas_peliculas

