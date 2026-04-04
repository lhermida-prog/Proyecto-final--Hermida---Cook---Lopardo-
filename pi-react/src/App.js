import React from "react"; 
import Home from "./screens/Home/Home"
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";import Login from "./screens/Login/Login";
import Notfound from "./screens/Not-Found/Not-Found";
import Header from "./Components/Header-Footer/Header"
import Footer from "./Components/Header-Footer/Footer"
import Detalles from "./screens/Pagina-Detalles/Pagina-Detalles"
import Register from "./screens/Register/Register"




function App() {
  
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
      <Switch>
        <Route path = '/login' component = {Login}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/' exact={true} component = {Home}/>
        <Route path = '/detalle/:id' component = {Detalles}/>
        <Route path = '*' component = {Notfound}/>
        </Switch>
        </BrowserRouter>  
      <Footer/>
    </React.Fragment>
  );
}

export default App;
