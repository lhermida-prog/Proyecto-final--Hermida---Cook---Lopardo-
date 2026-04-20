import React from "react";
import { Link } from "react-router-dom";
import logout from "../Logout/Logout";


function Header() {
    let Etiquetas = [
      {nombre : "Home", link : "/", clase : "nav-link"},
      {nombre : "Peliculas" , link : "/peliculas" , clase : "nav-link"},
      {nombre : "Series" , link : "/series", clase : "nav-link"},
      {nombre : "Favoritas" , link : "/favorites", clase : "nav-link"},
      {nombre : "Crear cuenta" , link : "/register", clase : "nav-link ml-auto"},
      {nombre : "Login" , link : "/login", clase : "nav-link"}]


  return (
    <div className="container">
      <h1>UdeSA Movies</h1>
      <logout/>
      <nav>
        <ul className="nav nav-tabs my-4">
          {Etiquetas.map( (item , idx) => { 
          return (
          <li key ={ item + idx } className={item.clase}>
            <logout/>
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