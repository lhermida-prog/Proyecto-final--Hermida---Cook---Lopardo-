import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pelicula.css";


class Pelicula extends Component{
    constructor(props){
        super(props)
        this.state={
            estado : false,
            mostrar : false
        }

    }
    Agregarfavorito(id){ 
    let storage = localStorage.getItem("fav-peliculas")
    let storageparseado = JSON.parse (storage)

    if (storageparseado == null){
        let primervalor =[id]
        let valorstring = JSON.stringify (primervalor)
        localStorage.setItem("fav-peliculas",valorstring)
    }
    else{
        storageparseado.push(id)
        let storagestring = JSON.stringify(storageparseado)
        localStorage.setItem("fav-peliculas",storagestring)
    }
    this.setState({estado:true})
}

Sacarfavorito(id){ 
    let storage = localStorage.getItem("favno-peliculas")
    let storageparseado = JSON.parse (storage)
    
    if (storageparseado == null){
        let primervalor =[id]
        let valorstring = JSON.stringify (primervalor)
        localStorage.setItem("fav-peliculas",valorstring)
    }
    else{
        storageparseado.filter(id)
        let storagestring = JSON.stringify(storageparseado)
        localStorage.setItem("favno-peliculas",storagestring)
    }
    this.setState({estado:true})
}

Vermas = () => {
    this.setState({
        mostrar : !this.state.mostrar
    })
}

    render(){
    return (
        <React.Fragment>
            
        <article className="single-card-movie">
            <img src={`https://image.tmdb.org/t/p/w500${this.props.img}`} className="card-img-top" alt="..."/>
            <div className="cardBody">
                <h5 className="card-title">{this.props.titulo}</h5>
                <button className="btn btn-primary" onClick={this.Vermas}>
                    {this.state.mostrar ? "Ver menos" : "Ver más"}
                </button>
                <p className={`card-text ${this.state.mostrar ? "show" : "hide" }`}>{this.props.descripcion}</p>
                <Link to = {`/pelicula/${this.props.id}`}>Ir a detalle</Link>
                <button onClick={() => this.Agregarfavorito(this.props.id)} className="Boton">Agregar a Favoritos</button>
                <button onClick={() => this.Sacarfavorito(this.props.id)} className="Boton">Sacar de Favoritos</button>  
            </div>
        </article>
        </React.Fragment>
        
    )
    }
}


export default Pelicula
