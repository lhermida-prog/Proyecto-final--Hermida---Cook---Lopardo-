import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pelicula.css"



function Pelicula(props) {
    return (
        <React.Fragment>
        <article className="single-card-movie">
            <img src={`https://image.tmdb.org/t/p/w500${props.img}`} className="card-img-top" alt="..."/>
            <div className="cardBody">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <Link to = {`/pelicula/${props.id}`}>Ir a detalle</Link>
                
            </div>
        </article>
        </React.Fragment>
    )
}


export default Pelicula
class Peliculas extends Component {
      constructor(props) {
        super(props);
        this.state = {
          datos_peliculas: [],
    
        }
      }
      componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5819e166bc6813d39312079be7ac67ba")
          .then(res => res.json())
          .then(data => this.setState(
            {
              datos_peliculas: data.results,
              
            }))
    
          .catch(err => console.error(err));
      }
  render() {
    return (
    <React.Fragment>
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <section className="rowcards" id="movies">
        {this.state.datos_peliculas.map(item=>(
            <article key={item.id} className="single-card-movie">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..."/>
            <div className="cardBody">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.overview}</p>
                <Link to = {`/pelicula/${item.id}`}>Ir a detalle</Link>
            </div>
        </article>
        ))}
        </section>
    </React.Fragment>
    );
  }
}
