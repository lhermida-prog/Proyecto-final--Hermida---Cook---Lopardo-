import React, {useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function Header () {

  const [estado,setestado] = useState(false)
  const [etiquetas_sin_cuenta , set_sin_cuenta] = useState( [
        { nombre: "Home", link: "/", clase: "nav-link" },
        { nombre: "Peliculas", link: "/peliculas", clase: "nav-link" },
        { nombre: "Series", link: "/series", clase: "nav-link" },
        { nombre: "Crear cuenta", link: "/register", clase: "nav-link ml-auto" },
        { nombre: "Login", link: "/login", clase: "nav-link" }])
  const [etiquetas_con_cuenta , set_con_cuenta] = useState([
        { nombre: "Home", link: "/", clase: "nav-link" },
        { nombre: "Peliculas", link: "/peliculas", clase: "nav-link" },
        { nombre: "Series", link: "/series", clase: "nav-link" },
        { nombre: "Favoritas", link: "/favorites", clase: "nav-link" },
        { nombre: "Log out", link: "/Home", clase: "nav-link ml-auto"}])
       
    
  


    let usuario = cookies.get("usuario-auth-cookie")

    if (!usuario) {
      return <div className="container">
        <h1>UdeSA Movies</h1>
        <nav>
          <ul className="nav nav-tabs my-4">
            {etiquetas_sin_cuenta.map((item, idx) => {
              return (
                <li key={item + idx} className={item.clase}>
                  <Link className="nav-link" to={item.link}> {item.nombre}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    }
    else{
      return <div className="container">
        <h1>UdeSA Movies</h1>
        <nav>
          <ul className="nav nav-tabs my-4">
            {etiquetas_con_cuenta.map((item, idx) => {
              return (
                <li key={item + idx} className={item.clase}>
                  <Link className="nav-link" to={item.link}> {item.nombre}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

    }
  }

    
    
export default Header