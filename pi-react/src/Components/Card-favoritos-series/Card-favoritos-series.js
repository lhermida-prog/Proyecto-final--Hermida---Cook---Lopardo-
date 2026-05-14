import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function CardfavSeries (props) {
    
   const [mostrar , setmostrar] = useState(false)
    function sacarFav(id) {
        let storage = localStorage.getItem("favoritos-series")
        storage = JSON.parse(storage)

        if (storage !== null) {
            let storageFiltrado = storage.filter((unId) => unId !== id)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritos-series", storageString)
        }
    }
    function verMas() {
        setmostrar(!mostrar) 
    }
        return (
            <React.Fragment>
                <article className="single-card-movie">
                    <img src={`https://image.tmdb.org/t/p/original${props.img}`} className="card-img-top" alt={props.titulo} />
                    <div className="cardBody">
                        <h5 className="card-title">{props.titulo}</h5>
                        <button className="btn btn-primary" onClick={() => verMas()}>
                            {mostrar ? "Ver menos" : "Ver más"}
                        </button>
                        <p className={`card-text ${mostrar ? "show" : "hide"}`}>{props.descripcion}</p>
                        <button className="Boton" onClick={() => sacarFav(props.id) }>Sacar de Favoritos</button>
                        <Link to={`/serie/${props.id}`}>Ir a detalle</Link>
                    </div>
                </article>
            </React.Fragment>
        )
    }

export default CardfavSeries