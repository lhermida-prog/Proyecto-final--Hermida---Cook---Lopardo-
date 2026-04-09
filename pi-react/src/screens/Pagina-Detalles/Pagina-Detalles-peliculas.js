import React,{Component} from "react";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";


class PeliculasDetalles extends Component{
    constructor (props){
        super(props)
        this.state = {
            pelicula : "",
            mostrar: true
        }
    }

    componentDidMount (){
        let id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
        .then(res => res.json())
        .then(data => this.setState({pelicula: data}))
        .catch(err => console.error(err));

        let storage = localStorage.getItem("favoritos")
        storage = JSON.parse(storage)

        if (storage !== null){
            let estaEnFavoritos = storage.includes(id)
            
            this.setState({
                mostrar: !estaEnFavoritos
            })
        }
    }
    agregarFav(id){

        let storage = localStorage.getItem("favoritos")
        storage = JSON.parse(storage)

        if (storage !== null){
            storage.push(id)
            console.log(storage);
            let storageString = JSON.stringify(storage)
            localStorage.setItem("favoritos" , storageString)

            this.setState({
                mostrar: false
            })
        }
        else {
            let primerFav = [id]

            let storageString = JSON.stringify(primerFav)
            localStorage.setItem("favoritos" , storageString)

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
        localStorage.setItem("favoritos" , storageString)

        this.setState({
            mosatrar: true
        })
    }

    render (){
        if (this.state.pelicula === ""){
            return <h2>Cargando Pelicula...</h2>
        }

        return (
            <React.Fragment>
                <Header/>
                <section className="row">
                    <img className= "col-md-6" src={`https://image.tmdb.org/t/p/original${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                    
                <section className="col-md-6 info">
                    <h3>Descripción</h3>
                    <p className="description"> {this.state.pelicula.overview}</p>
                    <h2 className="alert alert-primary">{this.state.pelicula.title}</h2>
                    <p className="mt-0 mb-0 length"> <strong>Puntuación:</strong> {this.state.pelicula.vote_average}</p>
                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de lanzamiento:</strong> {this.state.pelicula.release_date}</p>
                    <p className="mt-0 mb-0 length"><strong>Genero:</strong> {this.state.pelicula.genres.name }</p>
                    <p className="mt-0 mb-0 length"><strong>Duracion:</strong> {this.state.pelicula.runtime} minutos</p>
                    <button onClick={() => this.state.mostrar ? this.agregarFav(this.state.pelicula.id): this.sacarFav(this.state.pelicula.id)}>
                        {this.state.mostrar ? "Agregar a favoritos" : "Sacar de favoritos"}
                    </button>
                </section>
            </section>
            
            <Footer/>
            </React.Fragment>
        )
    }
}
export default PeliculasDetalles