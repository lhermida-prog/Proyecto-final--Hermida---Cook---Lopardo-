import React from "react"; 
import Home from "./screens/Home/Home"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notfound from "./screens/Not-Found/Not-Found";
import Detalles from "./screens/Pagina-Detalles/Pagina-Detalles-peliculas"
import DetallesSeries from "./screens/Pagina-Detalles/Pagina-Detalles-Series"
import Register from "./screens/Register/Register"
import Login from "./screens/Login/Login";
import PaginaPeliculas from "./screens/Paginadepeliculas/Paginadepeliculas"
import Series from "./screens/Paginadeseries/Paginadeseries";
import ResultadosBusqueda from "./screens/Resultados-Busqueda/Resultados-Busqueda";




function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <Route path = '/login' component = {Login}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/' exact={true} component = {Home}/>
        <Route path = '/pelicula/:id' component = {Detalles}/>
        <Route path = '/peliculas' component = {PaginaPeliculas}/>
        <Route path = '/series' component = {Series}/>
        <Route path = '/serie/:id' component = {DetallesSeries}/>
        <Route path = '*' component = {Notfound}/>
        <Route path = '/ResultadosBusqueda/:search/:eleccion' component  = {ResultadosBusqueda}/>

      </Switch>
      </BrowserRouter>  

    </React.Fragment>
  );
}

export default App;
