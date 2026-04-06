import React from "react"; 
import Home from "./screens/Home/Home"
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Notfound from "./screens/Not-Found/Not-Found";
import Header from "./Components/Header-Footer/Header"
import Footer from "./Components/Header-Footer/Footer"
import Detalles from "./screens/Pagina-Detalles/Pagina-Detalles"
import Register from "./screens/Register/Register"
import Login from "./screens/Login/Login";




function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <Route path = '/login' component = {Login}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/' exact={true} component = {Home}/>
        <Route path = '/pelicula/:id' component = {Detalles}/>
        <Route path = '*' component = {Notfound}/>
        </Switch>
        </BrowserRouter>  

    </React.Fragment>
  );
}

export default App;
