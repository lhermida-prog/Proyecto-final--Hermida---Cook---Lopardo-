import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./pagina.css"
import Header from "../../Components/Header-Footer/Header"
import Footer from "../../Components/Header-Footer/Footer"


class Peliculas extends Component {
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
          
        }))

      .catch(err => console.error(err));
  }

    Vermas = () => {
        this.setState({
            mostrar : !this.state.mostrar
        })
    }


  render() {
    return (
      <React.Fragment>
        <Header/>
         <h2 class="alert alert-primary">Todas las películas</h2>
        <form class="filter-form px-0 mb-3" action="" method="get">
            <input type="text" name="filter" id="" placeholder="Buscar dentro de la lista"/>
        </form>
        
        <button class="btn btn-info">Cargar más</button>

        <section class="row cards all-movies" id="movies">
            {this.state.datos.map((item)=>
            <article class="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} class="card-img-top" alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{item.title}</h5>
                    <button className="btn btn-primary" onClick={this.Vermas}>
                        {this.state.mostrar ? "Ver menos" : "Ver más"}
                    </button>
                    <p className={`card-text ${this.state.mostrar ? "show" : "hide" }`}>{item.overview}</p>
                    <Link to = {`/pelicula/${item.id}`}>Ir a detalle</Link>
                    <button onClick={() => this.Agregarfavorito(item.id)} className="Boton">Agregar a Favoritos</button>
                    <button onClick={() => this.Sacarfavorito(item.id)} className="Boton">Sacar de Favoritos</button>  
                </div>
            </article>)}
        </section>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Peliculas