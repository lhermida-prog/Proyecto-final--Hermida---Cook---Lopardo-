import React from "react";
import "../Header-Footer/Header.css"
import { Link } from "react-router-dom";
import "../../App.css";


function Header() {
    let Etiquetas = [
      {nombre : "Home", link : "/"},
      {nombre : "Peliculas" , link : "/peliculas"},
      {nombre : "Series" , link : "/series"},
      {nombre : "Favoritas" , link : "/favorites"},
      {nombre : "Registro" , link : "/register"},
      {nombre : "Login" , link : "/login"}]


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