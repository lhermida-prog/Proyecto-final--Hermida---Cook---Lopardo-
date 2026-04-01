import React from "react"; 
import Home from "./screens/Home/Home"
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";import Login from "./Components/Login/Login";
import Notfound from "./Components/Not-Found/Not-Found";
import Header from "./Components/Header-Footer/Header"
import Footer from "./Components/Header-Footer/Footer"




function App() {
  
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path = '/login.js' component = {Login}/>
        <Route path = '/' exact={true} component = {Home}/>
        <Route path = '*' component = {Notfound}/>
      </Switch>  
      <Footer/>
    </React.Fragment>
  );
}

export default App;
