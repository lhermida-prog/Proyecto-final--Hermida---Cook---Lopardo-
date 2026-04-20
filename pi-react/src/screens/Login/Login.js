import React,{Component} from "react";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";
import { Link } from "react-router-dom";
import "../../screens/Login/login.css";
import FormLogin from "../../Components/FormLogin/FormLogin";
import Cookies from 'universal-cookie'

class Login extends Component {
constructor(props) {
    super(props);
    this.state= {email:'',password:''}
       
    };



Submit(event){
event.preventdefault();
let usuarios = {

  email: this.state.email,
  password: this.state.password

}


}


controlarCambios(event,campo){
  console.log('logiiin')
    this.setState({[campo]:event.target.value});
}
render(){
    return(
    <div className="container">
    <FormLogin/>
    </div>
    )
}}

export default Login
