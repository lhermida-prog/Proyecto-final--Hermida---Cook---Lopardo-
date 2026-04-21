import React, { Component } from 'react'
import { withRouter } from "react-router-dom"


class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      valor: '' ,
      eleccion: '' };
    
  }

  controlarCambios(event) {
    this.setState({ 
      valor: event.target.value 
    });
  }

  ejecutarBusqueda(e){
    e.preventDefault();
    this.props.history.push('/ResultadosBusqueda/' + this.state.eleccion + '/' + this.state.valor)
  }

  render() {
    return (
      <form onSubmit={(event) => this.ejecutarBusqueda(event)}> 
        <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} placeholder='Buscar...'/>
        <input  onChange={()=> this.setState({eleccion : "movie"})} type="radio" id="movie" name="results" value="movie"></input>
        <label for="movie">Movie</label>
        <input onChange={()=> this.setState({eleccion : "tv"})} type="radio" id="tv" name="results" value="tv"></input>
        <label for="tv">Tv</label>
           
      </form>

      
    );
  }
}

export default withRouter(Formulario)
