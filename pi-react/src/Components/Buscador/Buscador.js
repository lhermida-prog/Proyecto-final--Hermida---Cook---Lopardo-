import React, { Component } from 'react'

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { valor: '' };
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({ valor: event.target.value });
  }

  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}> 
        <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} placeholder='Buscar...'/>
      </form>
    );
  }
}

export default Formulario
