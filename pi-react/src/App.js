import React from "react"; 
import Home from "./screens/Home/Home"
import { Route, Switch } from 'react-router-dom';
import Login from "./components/screens/Login/Login"
import Notfound from "./Components/Not-Found/Not-Found";




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
