import React,{Component} from "react";


class PeliculasDetalles extends Component{
    constructor (props){
        super(props)
        this.state = {
            pelicula : ""
        }
    }

    componentDidMount (){
        const id = this.props.peli.id;
        fetch(`https://api.themoviedb.org/3/account/${id}`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    render (){
        if (this.state.pelicula === null){
            return <h2>Cargando Pelicula...</h2>
        }
        const {imagen,nombre,Calificacion,Estreno,Duracion,Sinopsis, Genero}= this.state.pelicula

        return (
            <section className="unpersonaje">
                <img src = {imagen} alt = {nombre}/>
                <h1>{nombre}</h1>
                <p> {Calificacion} </p>
                <p> {Estreno} </p>
                <p> {Sinopsis} </p>
                <p> Genero : {Genero}</p>
                <p>Duracion: {Duracion}</p>
                <button>Agregar a Favoritos</button>
            </section>
        )
    }
}
export default PeliculasDetalles