import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./peliculas.css"

class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estado: false,
            mostrar: false
        }
    }
    agregarFav(id) {

        let storage = localStorage.getItem("favoritos")
        storage = JSON.parse(storage)

        if (storage === null) {
            let primerValor = [id]
            let valorString = JSON.stringify(primerValor)
            localStorage.setItem("favoritos", valorString)
        }
        else {
            if (!storage.includes(id)) {
                storage.push(id)
                let storageString = JSON.stringify(storage)
                localStorage.setItem("favoritos", storageString)
            }
            this.setState({
                estado: true
            })
        }
    }
    sacarFav(id) {
        let storage = localStorage.getItem("favoritos")
        storage = JSON.parse(storage)

        if (storage !== null) {
            let storageFiltrado = storage.filter((unId) => unId !== id)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritos", storageString)
        }
        this.setState({
            estado: false
        })
    }
    verMas() {
        this.setState({
            mostrar: !this.state.mostrar
        })
    }
    render() {
        return (
            <React.Fragment>
                <article className="single-card-movie">
                    <img src={`https://image.tmdb.org/t/p/original${this.props.img}`} className="card-img-top" alt={this.props.titulo} />
                    <div className="cardBody">
                        <h5 className="card-title">{this.props.titulo}</h5>
                        <button className="btn btn-primary" onClick={() => this.verMas()}>
                            {this.state.mostrar ? "Ver menos" : "Ver más"}
                        </button>
                        <p className={`card-text ${this.state.mostrar ? "show" : "hide"}`}>{this.props.descripcion}</p>
                        <button className="Boton" onClick={() => this.state.estado
                            ? this.sacarFav(this.props.id)
                            : this.agregarFav(this.props.id)}>
                            {this.state.estado ? "Sacar de favoritos" : "Agregar a favoritos"}
                        </button>
                        <Link to={`/pelicula/${this.props.id}`}>Ir a detalle</Link>
                    </div>
                </article>
            </React.Fragment>
        )
    }
}
export default Peliculas