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
      mostrar : false,
      mostrar2 : false, 

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
  agregarFav(id) {

        let storage = localStorage.getItem("favoritos")
        storage = JSON.parse(storage)

        if (storage !== null) {
            storage.push(id)
            console.log(storage);
            let storageString = JSON.stringify(storage)
            localStorage.setItem("favoritos", storageString)

            this.setState({
                mostrar: false
            })
        }
        else {
            let primerFav = [id]

            let storageString = JSON.stringify(primerFav)
            localStorage.setItem("favoritos", storageString)

            this.setState({
                mostrar: false
            })
        }
    }
    sacarFav(id) {
        let storage = localStorage.getItem("favoritos")
        storage = JSON.parse(storage)

        let storageFiltrado = storage.filter((unId) => unId !== id)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritos", storageString)

        this.setState({
            mostrar: true
        })
    }

    Vermas = () => {
        this.setState({
            mostrar2 : !this.state.mostrar2
        })
    }


  render() {
    return (
      <React.Fragment>
        <Header/>
         <h2 className="alert alert-primary">Todas las películas</h2>
        <form className="filter-form px-0 mb-3" action="" method="get">
            <input type="text" name="filter" id="" placeholder="Buscar dentro de la lista"/>
        </form>
        
        <button className="btn btn-info">Cargar más</button>

        <section className="row cards all-movies" id="movies">
            {this.state.datos.map((item , idx )=>
            <article key = {item + idx}className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className="card-img-top" alt="..."/>
                <div className="cardBody">
                    <h5 className="card-title">{item.title}</h5>
                    <button className="btn btn-primary" onClick={this.Vermas}>
                        {this.state.mostrar2 ? "Ver menos" : "Ver más"}
                    </button>
                    <p className={`card-text ${this.state.mostrar2 ? "show" : "hide" }`}>{item.overview}</p>
                    <Link to = {`/pelicula/${item.id}`}>Ir a detalle</Link>
                    <button onClick={() => this.state.mostrar ? this.agregarFav(item.id) : this.sacarFav(item.id)}>
                        {this.state.mostrar ? "Agregar a favoritos" : "Sacar de favoritos"}
                    </button> 
                </div>
            </article>)}
        </section>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Peliculas