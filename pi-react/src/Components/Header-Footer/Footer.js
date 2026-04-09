import React from "react";

function footer (){
    let integrantes = ["Lucas Hermida","Gonzalo Lopardo","Thomas Cook"]
    return(
        <footer className="alert alert-primary mt-4 text-center">
            {integrantes.map( (item , idx ) => { 
          return (
          <p key = {item + idx} className="mb-0">{item}</p>)
          })}
        </footer> 
 
        )}


export default footer