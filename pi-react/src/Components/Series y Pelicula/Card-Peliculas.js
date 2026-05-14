import React, {  useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie"
import "./peliculas.css"

const cookies = new Cookies()

function Peliculas (props) {
    const [estado, setestado] = useState(false)
    const [mostrar, setmostrar] = useState (false)
          
    function agregarFav(id) {

        let storage = localStorage.getItem("favoritos-peliculas")
        storage = JSON.parse(storage)

        if (storage === null) {
            let primerValor = [id]
            let valorString = JSON.stringify(primerValor)
            localStorage.setItem("favoritos-peliculas", valorString)
        }
        else {
            if (!storage.includes(id)) {
                storage.push(id)
                let storageString = JSON.stringify(storage)
                localStorage.setItem("favoritos-peliculas", storageString)
            }
            setestado(true)
        }
    }
    function sacarFav(id) {
        let storage = localStorage.getItem("favoritos-peliculas")
        storage = JSON.parse(storage)

        if (storage !== null) {
            let storageFiltrado = storage.filter((unId) => unId !== id)
            let storageString = JSON.stringify(storageFiltrado)
            localStorage.setItem("favoritos-peliculas", storageString)
        }
            setestado(false)
    }
    function verMas() {
        setmostrar (!mostrar)
    }
   

        let usuario = cookies.get("usuario-auth-cookie")

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

                        {usuario ? <button className="Boton" onClick={() => estado
                            ? sacarFav(props.id)
                            : agregarFav(props.id)}>
                            {estado ? "Sacar de favoritos" : "Agregar a favoritos"}
                        </button> : ""}
                        <Link to={`/pelicula/${props.id}`}>Ir a detalle</Link>
                    </div>
                </article>
            </React.Fragment>
        )
    }

export default Peliculas