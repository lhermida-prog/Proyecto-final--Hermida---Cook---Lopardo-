import React from "react";
import "./Header.css"

function footer (){
    let integrantes = ["Lucas Hermida","Gonzalo Lopardo","Thomas Cook"]
    return(
        <footer class="alert alert-primary mt-4 text-center">
            {integrantes.map( item => { 
          return (
          <p class="mb-0">{item}</p>)
          })}
        </footer>
 
        )}


export default footer