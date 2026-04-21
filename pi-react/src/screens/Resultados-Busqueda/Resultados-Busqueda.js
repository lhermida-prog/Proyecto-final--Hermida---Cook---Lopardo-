import { Component } from "react";
import { renderMatches } from "react-router-dom";

class ResultadosBusqueda extends Component {
constructor(props) {
    super(props);
    this.state= {pelicula:"",serie:""
      
    };
}

componentDidMount(){

  

  fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.pelicula}?api_key=5819e166bc6813d39312079be7ac67ba`)
     .then(response => response.json())
      .then(data =>
        this.setState({
          datos: data.results
        })
      )
      .catch(error => console.log(error));
    
  
     fetch(`https://api.themoviedb.org/3/search/tv?query=${this.state.serie}?api_key=5819e166bc6813d39312079be7ac67ba`)
     .then(response => response.json())
      .then(data =>
        this.setState({
          datos: data.results
        })
      )
      .catch(error => console.log(error));
  }
  

render(){
  return(
    <div className="container">
          <h2 className="alert alert-primary">Películas</h2>
 <section className="row cards">
  {}
 </section>

<h2 className="alert alert-warning">Series</h2>
 <section className="row cards">
   {}



 </section>
</div>
);
}
}
export default ResultadosBusqueda;
