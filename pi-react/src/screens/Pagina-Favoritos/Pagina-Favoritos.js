import React,{Component} from "react";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer"
import { Link } from "react-router-dom";

class Favoritos extends Component{
    constructor(props){
        super(props)
        this.state=
            {
                informacionSeries : [],
                informacionPeliculas : []
            }
    }


    componentDidMount(){
        let id = localStorage.getItem("favoritos")
        let idparseado = JSON.parse(id)
        idparseado.map((id)=> 
         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
            .then(res => res.json())
            .then(data => this.setState({informacionPeliculas : data}))
            .catch(err => console.error(err))
        )
    
    }

    render(){
        if (this.state.informacionPeliculas.length === 0 || this.state.informacionPeliculas === null){
            return <h3>No hay Peliculas favoritas aun</h3>
        }
        return(
            <React.Fragment>
                <Header/>
                <h2 class="alert alert-primary">Películas favoritas</h2>
                {this.state.informacionPeliculas.map((data)=> 
                <section class="row cards" id="movies">
                    <article class="single-card-movie">
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} class="card-img-top" alt={`${data.name}`}/>
                    <div class="cardBody">
                    <h5 class="card-title">{`${data.title}`}</h5>
                    <p class="card-text">{`${data.overview}`}</p>
                    <a href="movie.html" class="btn btn-primary">Ver más</a>
                    <a href="" class="btn alert-info">♥️</a>
                </div>
                    </article>
                </section>
                
                )}
                <Footer/>
            </React.Fragment>
        )
    }
    
    

    
}
export default Favoritos


