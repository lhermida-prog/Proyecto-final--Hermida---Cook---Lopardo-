import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pelicula.css"



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
                
            </div>
        </article>
        </React.Fragment>
    )
}


export default Pelicula
