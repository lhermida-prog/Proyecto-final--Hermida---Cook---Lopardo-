import React from "react";
import { Link } from "react-router-dom";


function Header() {
    let Etiquetas = [
      {nombre : "Home", link : "/", clase : "nav-link"},
      {nombre : "Peliculas" , link : "/peliculas" , clase : "nav-link"},
      {nombre : "Series" , link : "/series", clase : "nav-link"},
      {nombre : "Favoritas" , link : "/favorites", clase : "nav-link"},
      {nombre : "Registro" , link : "/register", clase : "nav-link ml-auto"},
      {nombre : "Login" , link : "/login", clase : "nav-link"}]


  return (
    <div className="container">
      <h1>UdeSA Movies</h1>
      <nav>
        <ul className="nav nav-tabs my-4">
          {Etiquetas.map( item => { 
          return (
          <li className={item.clase}>
            <Link className="nav-link" to ={item.link}> {item.nombre}</Link>
          </li>
          )
          })}
        </ul>
      </nav>
    </div>

    );
}

export default Header