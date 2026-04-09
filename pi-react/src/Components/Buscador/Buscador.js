import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      valor: '' ,
      eleccion: '' };
    
  }

  evitarSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    this.props.history.push('/ResultadosBusqueda/' + this.state.valor ,"/",+ this.state.eleccion )

  }

  controlarCambios(event) {
    this.setState({ valor: event.target.value });
  }
  ejecutarBusqueda(e){
    e.preventDefault();
    
  }

  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}> 
        <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} placeholder='Buscar...'/>
        <input  onChange={()=> this.setState({eleccion : "movie"})} type="radio" id="movie" name="results" value="movie"></input>
        <label for="movie">Movie</label><br></br>
        <input onChange={()=> this.setState({eleccion : "tv"})} type="radio" id="tv" name="results" value="tv"></input>
        <label for="tv">Tv</label><br></br>
           
      </form>

      
    );
  }
}

export default withRouter(Formulario)
