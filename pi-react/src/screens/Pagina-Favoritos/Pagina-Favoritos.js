import React,{Component} from "react";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer"
import { Link } from "react-router-dom";
import Peliculas from "../../Components/Series y Pelicula/Card-Peliculas";
import Series from "../../Components/Series y Pelicula/Card-Series";

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
        let id1 = localStorage.getItem("favoritos-peliculas")
        let idpelicula;

         if (id1 !== null) {
            idpelicula = JSON.parse(id1);
        } else {
            idpelicula = [];
        }


        let peliculas = []
        idpelicula.map((id) =>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
            .then(res => res.json())
            .then(data => {
    
                peliculas.push(data);

                this.setState({
                    informacionPeliculas: peliculas
                });
            })
            .catch(err => console.error(err))
    )
        
        let id2 = localStorage.getItem("favoritos-series")
        let idserie;

        if (id2 !== null) {
            idserie = JSON.parse(id2);
        } else {
            idserie = [];
        }
        let series = []
        idserie.map((id)=> 
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
            .then(res => res.json())
            .then(data => {
                
                series.push(data);

                this.setState({
                    informacionSeries: series
                });
            })
            .catch(err => console.error(err))
    )
    
    }

    render(){
        console.log(this.state.informacionPeliculas);
        
        return(
            <React.Fragment>
                <Header/>
                <h2 className="alert alert-primary">Películas favoritas</h2>
                <section class="row cards" id="movies">
                {this.state.informacionPeliculas.map((pelicula , idx)=> 
                <Peliculas
                key={pelicula + idx}
                id ={pelicula.id}
                tipo ="Película"
                lenguaje={pelicula.original_language}
                titulo_0={pelicula.original_title}
                descripcion={pelicula.overview}
                popularidad={pelicula.popularity}
                img={pelicula.poster_path}
                fecha={pelicula.release_date}
                titulo={pelicula.title}
                promedio={pelicula.vote_average}
                cantidad={pelicula.vote_count}/>
                )}
                </section>
                <h2 className="alert alert-warning">Series favoritas</h2>
                <section class="row cards" id="tv-show">
                {this.state.informacionSeries.map((serie , idx)=>
                <Series
                key={serie + idx}
                id={serie.id}
                tipo="Serie"
                lenguaje={serie.original_language}
                nombre_0={serie.original_name}
                descripcion={serie.overview}
                popularidad={serie.popularity}
                img={serie.poster_path}
                fecha={serie.first_air_date}
                titulo={serie.name}
                promedio={serie.vote_average}
                cantidad={serie.vote_count} />
                )}
                </section>
                <Footer/>
            </React.Fragment>
        )
    }
    
    

    
}
export default Favoritos


