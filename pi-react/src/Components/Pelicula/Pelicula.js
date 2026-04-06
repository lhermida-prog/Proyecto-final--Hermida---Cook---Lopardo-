import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pelicula.css";

Agregarfavorito(id){
    this.state={ estado:false }  
    let storage = localStorage.getitem("fav-peliculas")
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
    this.setstate({estado:True})
}

Sacarfavorito(id){
    this.state={
    estado:false}  
    let storage = localStorage.getitem("favno-peliculas")
    let storageparseado = JSON.parse (storage)
    
    if (storageparseado == null){
        let primervalor =[id]
        let valorstring = JSON.stringify (primervalor)
        localStorage.setItem("fav-peliculas",valorstring)
    }
    else{
        storageparseado.filter(id)
        let storagestring = JSON.stringify(storageparseado)
        localStorage.setItem("fav-peliculas",storagestring)
    }
    this.setstate({estado:True})
}

function Pelicula(props) {
    
    return (
        <React.Fragment>
        <article className="single-card-movie">
            <img src={`https://image.tmdb.org/t/p/w500${props.img}`} className="card-img-top" alt="..."/>
            <div className="cardBody">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <Link to = {`/pelicula/${props.id}`}>Ir a detalle</Link>
                <button className="Boton">Agregar a Favoritos</button>
                <button className="Boton">Sacar de Favoritos</button>  
            </div>
        </article>
        </React.Fragment>
    )
}


export default Pelicula
