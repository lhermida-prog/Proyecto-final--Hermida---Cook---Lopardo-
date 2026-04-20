import React,{ Component } from "react";
import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import { Link } from "react-router-dom";
import "../../screens/Register/registro.css";
import { withRouter } from "react-router-dom";
class FormRegister extends Component {
constructor(props) {
    super(props);
    this.state= {email:'',password:'',error:''}

};

       
 

Submit(event){
event.preventDefault(); 
let usuario = {

  email: this.state.email,
  password: this.state.password

}
 if (this.state.password.length<6) {
this.setState({error:"La contrseña tiene que tener al menos 6"})
return;
}
let usuariosstorage = localStorage.getItem("usuarios")
let usuariosparseado = JSON.parse(usuariosstorage)
if(usuariosparseado != null){
 let mailsenuso = usuariosparseado.filter(usuario => usuario.email === this.state.email)
 if(mailsenuso.length>0){
    this.setState({error:"El email ya está en uso"})
    return;
 }
}
if(usuariosparseado == null){
   let primerusuario =[usuario]
  let usuariostring = JSON.stringify(primerusuario)
  localStorage.setItem("usuarios",usuariostring) 
}
else{
usuariosparseado.push(usuario)
let usuariostring = JSON.stringify(usuariosparseado)
localStorage.setItem("usuarios",usuariostring)

 this.props.history.push("/login");
}

   
 }


controlarCambios(event,campo){
    this.setState({[campo]:event.target.value});
}
render(){
    return(
    <div className="container">
      <Header/>
    
      <div className="registro-container">

        <h2 className="alert alert-primary">Registro</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">

  <h2>Registro</h2>

        <form onSubmit={(e) => this.Submit(e)}>
   
     <input type="text" name="email"  value={this.state.email}onChange={(e) => this.controlarCambios(e,'email')} placeholder="email" />
       <label for="movie"></label><br></br>
    
    <input type="text" name="password" value={this.state.password}onChange={(e) => this.controlarCambios(e,'password')}placeholder="Password"/>
     <label for="movie"></label><br></br>

          
          <button type="submit">Registrarse</button>

        </form>

      <p>{this.state.error}</p>

            <p className="mt-3 text-center">
              ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
            </p>

         </div>
        </div>
      </div>
        


        <Footer/>
      </div>
      

     
    )
}
}

export default withRouter(FormRegister);
