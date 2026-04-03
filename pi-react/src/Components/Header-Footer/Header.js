import React from "react";
import "../Header-Footer/Header.css"
import { Link } from "react-router-dom";


function Header() {
    let Etiquetas = [
      {nombre : "Home", link : "index.html"},
      {nombre : "Peliculas" , link : "movies.html"},
      {nombre : "Series" , link : "series.html"},
      {nombre : "Favoritas" , link : "favorites.html"},
      {nombre : "Registro" , link : "register.html"},
      {nombre : "Login" , link : "login.html"}]


  return (
    <div className="container">
      <h1>UdeSA Movies</h1>
      <nav>
        <ul className="nav nav-tabs my-4">
          {Etiquetas.map( item => { 
          return (
          <li className="nav-item">
              <a className="nav-link" href = {item.link}> <link to ={item.link}/> {item.nombre}</a> 
          </li>
          )
          })}
        </ul>
      </nav>
    </div>

    );
}

export default Header