import React,{Component} from "react";
import { Link } from "react-router-dom";
import Series from "../../Components/Series y Pelicula/Card-Series";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";

class Vermas_series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas_cartel: [],
    }
  }
  componentDidMount() {

    fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=5819e166bc6813d39312079be7ac67ba")
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            peliculas_cartel: data.results
          })
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <React.Fragment>
        <Header/>
        <h2 className="alert alert-warning">TV shows airing today</h2>
        <section className="row cards all-movies" id="movies">
          {this.state.peliculas_cartel === "" ? (
            <h3>Cargando...</h3>
          ) : (
             this.state.peliculas_cartel.map((peli , idx) => <Series 
             key= {peli + idx}
              id ={peli.id}
                tipo ="Película"
                lenguaje={peli.original_language}
                titulo_0={peli.original_title}
                descripcion={peli.overview}
                popularidad={peli.popularity}
                img={peli.poster_path}
                fecha={peli.release_date}
                titulo={peli.name}
                promedio={peli.vote_average}
                cantidad={peli.vote_count}/>)
          )}
            
          
        </section>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Vermas_series

