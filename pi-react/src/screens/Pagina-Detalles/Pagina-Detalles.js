import React,{Component} from "react";
import "./detalles.css"


class PeliculasDetalles extends Component{
    constructor (props){
        super(props)
        this.state = {
            pelicula : ""
        }
    }

    componentDidMount (){
        let id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
        .then(res => res.json())
        .then(data => this.setState({pelicula: data}))
        .catch(err => console.error(err));
    }

    render (){
        if (this.state.pelicula === ""){
            return <h2>Cargando Pelicula...</h2>
        }

        return (
            <section className="detalles">
                <div className="detalle-img">
                    <img src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                </div>

                <div className="detalles-info">
                    <h1>{this.state.pelicula.title}</h1>
                    <p>Puntuacion: {this.state.pelicula.vote_average}</p>
                    <p>Fecha de lanzamiento: {this.state.pelicula.release_date}</p>
                    <p>Resumen: {this.state.pelicula.overview}</p>
                    <p>Genero: {this.state.pelicula.genres.name }</p>
                    <p>Duracion: {this.state.pelicula.runtime} minutos</p>
                    <button>Agregar a Favoritos</button>
                </div>
            </section>
        )
    }
}
export default PeliculasDetalles