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
        let id1 = localStorage.getItem("favoritos-peliculas")
        let idpelicula;

         if (id1 !== null) {
            idpelicula = JSON.parse(id1);
        } else {
            idpelicula = [];
        }
        idpelicula.map((id) =>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
            .then(res => res.json())
            .then(data => {
                let peliculas = this.state.informacionPeliculas;
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
        idserie.map((id)=> 
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=5819e166bc6813d39312079be7ac67ba`)
            .then(res => res.json())
            .then(data => {
                let series = this.state.informacionSeries;
                series.push(data);

                this.setState({
                    informacionSeries: series
                });
            })
            .catch(err => console.error(err))
    )
    
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <h2 className="alert alert-primary">Películas favoritas</h2>
                {this.state.informacionPeliculas.map((data)=> 
                <section className="row cards" id="movies">
                    <article className="single-card-movie">
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="card-img-top" alt={`${data.name}`}/>
                    <div className="cardBody">
                    <h5 className="card-title">{`${data.title}`}</h5>
                    <p className="card-text">{`${data.overview}`}</p>
                    <Link to = {`/pelicula/${data.id}`}>Ir a detalle</Link>
                </div>
                    </article>
                </section>
                )}
                <h2 className="alert alert-warning">Series favoritas</h2>
                {this.state.informacionSeries.map((data)=>
                <section className="row cards" id="tv-show">
                <article className="single-card-tv">
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="card-img-top" alt={`${data.name}`}/>
                <div className="cardBody">
                    <h5 className="card-title">{`${data.name}`}</h5>
                    <p className="card-text">{`${data.overview}`}</p>
                    <Link to = {`/serie/${data.id}`}>Ir a detalle</Link>
                    <a href="" className="btn alert-warning">♥️</a>
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


