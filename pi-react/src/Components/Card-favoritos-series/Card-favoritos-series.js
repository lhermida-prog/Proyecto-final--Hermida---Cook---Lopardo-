import React, { Component } from "react";
import { Link } from 'react-router-dom';


class CardfavSeries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estado: false,
            mostrar: false
        }
    }
   
    sacarFav(id) {
        let storage = localStorage.getItem("favoritos-series")
        storage = JSON.parse(storage)

        if (storage !== null) {
            let storageFiltrado = storage.filter((unId) => unId !== id)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritos-series", storageString)
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
                        <button className="Boton" onClick={() => this.sacarFav(this.props.id) }>
                        Sacar de Favoritos</button>
                        <Link to={`/serie/${this.props.id}`}>Ir a detalle</Link>
                    </div>
                </article>
            </React.Fragment>
        )
    }
}
export default CardfavSeries