import React,{Component} from "react";
import Header from "../Header-Footer/Header";
import Footer from "../Header-Footer/Footer";

class Login extends Component {
constructor(props) {
    super(props);
    this.state= {email:'',password:''}
       
    };



evitarSubmit(event){
event.preventdefault();
}

controlarCambios(event){
    this.setState({valor:event.target.name});
}
render(){
    return(
    <div className="container">
        <Header/>

        <h2 className="alert alert-primary">Registro</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => this.evitarSubmit(e)}>

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" value={this.state.email} onChange={(e) => this.controlarCambios(e)} placeholder="Ingresá tu email"/>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e) => this.controlarCambios(e)} placeholder="Ingresá tu contraseña"/>
              </div>

              <button type="submit" className="btn btn-primary btn-block"> Iniciar sesion</button>

            </form>

            <p className="mt-3 text-center">
              ¿No tenes cuenta? <a href="register.html">Registrate</a>
            </p>

          </div>
        </div>

        <Footer/>

      </div>
    )
}}

export default Login
