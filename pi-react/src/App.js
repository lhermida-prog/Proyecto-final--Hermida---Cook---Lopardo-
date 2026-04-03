import React from "react"; 
import Home from "./screens/Home/Home"
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";import Login from "./screens/Login/Login";
import Notfound from "./screens/Not-Found/Not-Found";
import Detalles from "./screens/Pagina-Detalles/Pagina-Detalles"
import Register from "./screens/Register/Register"




function App() {
  
  return (
    <React.Fragment>
      <Switch>
        <Route path = '/login' component = {Login}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/' exact={true} component = {Home}/>
        <Route path = '/pelicula/:id' component = {Detalles}/>
        <Route path = '*' component = {Notfound}/>
      </Switch>  
    </React.Fragment>
  );
}

export default App;
