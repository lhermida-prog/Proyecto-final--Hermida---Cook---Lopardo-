import React,{ Component } from "react";
import Footer from "../../Components/Header-Footer/Footer";
import Header from "../../Components/Header-Footer/Header";
import { Link } from "react-router-dom";
import "../../screens/Register/registro.css";
import FormRegister from "../../Components/FormRegister/FormRegister";


class Register extends Component {
constructor(props) {
    super(props);
    this.state= {email:'',password:''}
       
    };



evitarSubmit(event){
event.preventDefault();
}

controlarCambios(event){
    this.setState({valor:event.target.name});
}
render(){
    return(
    <div className="container">
     
      <FormRegister/>
    
 


    
      </div>
      

     
    )
}

}
export default Register

