import React, { Component } from "react";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";
import Cookies from "universal-cookie"

const cookies = new Cookies()

class SeriesDetalles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serie: "",
            mostrar: true
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
            .then(res => res.json())
            .then(data => this.setState({ serie: data }))
            .catch(err => console.error(err));

        let storage = localStorage.getItem("favoritos-series")
        storage = JSON.parse(storage)

        if (storage !== null) {
            let estaEnFavoritos = storage.includes(id)

            this.setState({
                mostrar: !estaEnFavoritos
            })
        }
    }
    agregarFav(id) {

        let storage = localStorage.getItem("favoritos-series")
        storage = JSON.parse(storage)

        if (storage !== null) {
            storage.push(id)
            console.log(storage);
            let storageString = JSON.stringify(storage)
            localStorage.setItem("favoritos-series", storageString)

            this.setState({
                mostrar: false
            })
        }
        else {
            let primerFav = [id]

            let storageString = JSON.stringify(primerFav)
            localStorage.setItem("favoritos-series", storageString)

            this.setState({
                mostrar: false
            })
        }
    }
    sacarFav(id) {
        let storage = localStorage.getItem("favoritos-series")
        storage = JSON.parse(storage)

        let storageFiltrado = storage.filter((unId) => unId !== id)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritos-series", storageString)

        this.setState({
            mostrar: true
        })
    }

    render() {

        let usuario = cookies.get("usuario-auth-cookie")


        if (this.state.serie === "") {
            return <h2>Cargando Serie...</h2>
        }

        return (
            <React.Fragment>
                <Header />
                <h2 class="alert alert-warning">{this.state.serie.name}</h2>
                <section class="row">
                    <section class="col-md-6 info">
                        <h3>Descripción</h3>
                        <p class="description">{this.state.serie.overview}</p>
                        <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.serie.first_air_date} </p>
                        <p class="mt-0 mb-0" id="episodes"><strong>Número de capítulos:</strong> {this.state.serie.number_of_episodes}</p>
                        <p class="mt-0 seasons"><strong>Temporadas:</strong> {this.state.serie.number_of_seasons}</p>
                        {usuario ? <button onClick={() => this.state.mostrar ? this.agregarFav(this.state.serie.id) : this.sacarFav(this.state.serie.id)}>
                            {this.state.mostrar ? "Agregar a favoritos" : "Sacar de favoritos"}
                        </button> : ""}
                    </section>
                    <img class="col-md-6" src={`https://image.tmdb.org/t/p/original${this.state.serie.poster_path}`} alt="" />
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default SeriesDetalles