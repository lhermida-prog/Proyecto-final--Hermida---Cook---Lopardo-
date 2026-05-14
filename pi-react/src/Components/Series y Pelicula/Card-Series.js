import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie"
import "./peliculas.css"

const cookies = new Cookies()

function Series (props) {
    const [estado,setestado] = useState(false)
    const [mostrar,setmostrar] = useState(false)
         

    
    function Agregarfavorito(id) {
        let storage = localStorage.getItem("favoritos-series")
        let storageparseado = JSON.parse(storage)

        if (storageparseado === null) {
            let primervalor = [id]
            let valorstring = JSON.stringify(primervalor)
            localStorage.setItem("favoritos-series", valorstring)
        }
        else {
            if (!storageparseado.includes(id)) {
                storageparseado.push(id)
                let storagestring = JSON.stringify(storageparseado)
                localStorage.setItem("favoritos-series", storagestring)
            }
        }
        setestado (true)  
    }

    function Sacarfavorito(id) {
        let storage = localStorage.getItem("favoritos-series")
        let storageparseado = JSON.parse(storage)

        if (storageparseado !== null) {
            let filtrado = storageparseado.filter((unId) => unId !== id)
            let storagestring = JSON.stringify(filtrado)
            localStorage.setItem("favoritos-series", storagestring)
        }

        setestado (false) 
    }

    function verMas() {
        setmostrar(!mostrar)
    }

   

        let usuario = cookies.get("usuario-auth-cookie")
        return (
            <React.Fragment>
                <article className="single-card-tv">
                    <img src={`https://image.tmdb.org/t/p/original${props.img}`} className="card-img-top" alt={props.titulo} />
                    <div className="cardBody">
                        <h5 className="card-title">{props.titulo}</h5>
                        <button className="btn btn-primary" onClick={() => verMas()}>
                            {mostrar ? "Ver menos" : "Ver más"}
                        </button>
                        <p className={`card-text ${mostrar ? "show" : "hide"}`}>{props.descripcion}</p>
                        {usuario ? <button className="Boton" onClick={() => estado
                            ? Sacarfavorito(this.props.id)
                            : Agregarfavorito(this.props.id)}>
                            {estado ? "Sacar de favoritos" : "Agregar a favoritos"}
                        </button> : ""}
                        <Link to={`/serie/${props.id}`}>Ir a detalle</Link>
                    </div>
                </article>
            </React.Fragment>

        )
    }


export default Series