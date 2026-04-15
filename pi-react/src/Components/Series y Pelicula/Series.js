import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./peliculas.css"

class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estado: false,
            mostrar: false
        }

    }
    Agregarfavorito(id) {
        let storage = localStorage.getItem("favoritos-series")
        let storageparseado = JSON.parse(storage)

        if (storageparseado === null) {
            let primervalor = [id]
            let valorstring = JSON.stringify(primervalor)
            localStorage.setItem("favoritos-series", valorstring)
        }
        else {
              if (!storageparseado.includes(id)) {
                storageparseado.push(id)
                let storagestring = JSON.stringify(storageparseado)
                localStorage.setItem("favoritos-series", storagestring)
              }
            }
              this.setState({ estado: true })
        }

        Sacarfavorito(id) {
            let storage = localStorage.getItem("favoritos-series")
            let storageparseado = JSON.parse(storage)

            if (storageparseado !== null) {
                let filtrado = storageparseado.filter((unId) => unId !== id)
                let storagestring = JSON.stringify(filtrado)
                localStorage.setItem("favoritos-series", storagestring)
            }

            this.setState({ estado: false })
        }

        verMas() {
            this.setState({
                mostrar: !this.state.mostrar
            })
        }

        render() {
            return (
                <React.Fragment>

                    <article className="single-card-tv">
                        <img src={`https://image.tmdb.org/t/p/original${this.props.img}`} className="card-img-top" alt={this.props.titulo} />
                        <div className="cardBody">
                            <h5 className="card-title">{this.props.titulo}</h5>
                            <button className="btn btn-primary" onClick={() => this.verMas()}>
                                {this.state.mostrar ? "Ver menos" : "Ver más"}
                            </button>
                            <p className={`card-text ${this.state.mostrar ? "show" : "hide"}`}>{this.props.descripcion}</p>
                            <button className="Boton" onClick={() => this.state.estado
                                ? this.Sacarfavorito(this.props.id)
                                : this.Agregarfavorito(this.props.id)}>
                                {this.state.estado ? "Sacar de favoritos" : "Agregar a favoritos"}
                            </button>
                            <Link to={`/serie/${this.props.id}`}>Ir a detalle</Link>
                        </div>
                    </article>
                </React.Fragment>

            )
        }
    }

export default Series