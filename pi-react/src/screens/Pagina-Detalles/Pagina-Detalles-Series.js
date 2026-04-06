import React,{Component} from "react";
import "./detalles.css"
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";


class SeriesDetalles extends Component{
    constructor (props){
        super(props)
        this.state = {
           serie : ""
        }
    }

    componentDidMount (){
        let id = this.props.match.params.id;        
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
        .then(res => res.json())
        .then(data => this.setState({serie: data}))
        .catch(err => console.error(err));
    }

    render (){
        if (this.state.serie === ""){
            return <h2>Cargando Serie...</h2>
        }
    
        return (
            <React.Fragment>
                <Header/>
                <h2 class="alert alert-warning">{this.state.serie.name}</h2>
            <section class="row">
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="description">{this.state.serie.overview}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.state.serie.air_date} </p>
                <p class="mt-0 mb-0" id="episodes"><strong>Número de capítulos:</strong> {this.state.serie.number_of_episodes}</p>
                <p class="mt-0 seasons"><strong>Temporadas:</strong> {this.state.serie.number_of_seasons}</p>
            </section>
                <img class="col-md-6" src= {`https://image.tmdb.org/t/p/w500${this.state.serie.poster_path}`}alt=""/>
            </section>
            <Footer/>
            </React.Fragment>
        )
    }
}

export default SeriesDetalles