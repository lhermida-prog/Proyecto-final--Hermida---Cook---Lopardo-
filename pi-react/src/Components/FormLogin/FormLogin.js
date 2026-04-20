import React, { Component } from "react";
import Header from "../../Components/Header-Footer/Header";
import Footer from "../../Components/Header-Footer/Footer";
import { Link } from "react-router-dom";
import "../../screens/Login/login.css";
import Cookies from 'universal-cookie'
import { withRouter } from "react-router-dom";

const cookies = new Cookies()
class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '' }

  };



  Submit(event) {
    event.preventDefault();
    let usuarios = {

      email: this.state.email,
      password: this.state.password

    }
    const usersStorage = localStorage.getItem("usuarios")
    if (usersStorage == null) {
      this.setState({ error: "Las creedenciales son invalidas" })
      return;
    }
    else {
      let userspareados = JSON.parse(usersStorage)
      let usuariosfiltrados = userspareados.filter(usuario => usuario.email === this.state.email)
      if (usuariosfiltrados.length === 0) {
        this.setState({ error: "El usuario ingresado no existe" })
        return;
      }
      else {
        if (usuariosfiltrados[0].password == this.state.password) {
          let usuariosEnSesion = JSON.stringify({ sesionActiva: true })
           cookies.set('usuario-auth-cookie',this.state.email)


        }
        else {
          this.setState({ error: "Las creedenciales son invalidas" })
          return;
        }
        this.props.history.push("/");
      }
    }


  }


  controlarCambios(event, campo) {
    this.setState({ [campo]: event.target.value });
  }
  render() {
    return (
      <div className="container">
        <Header />
        <div className="registro-container">
          <h2 className="alert alert-primary">Inicio de Sesion</h2>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={(e) => this.Submit(e)}>

                <div className="form-group">
                  <label for= "email">Email</label>
                  <input type="email" className="form-control" name="email" value={this.state.email} onChange={(e) => this.controlarCambios(e, 'email')} placeholder="Ingresá tu email" />
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e) => this.controlarCambios(e, 'password')} placeholder="Ingresá tu contraseña" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>

              </form>
              <p>{this.state.error}</p>
              <p className="mt-3 text-center">¿No tenes cuenta? <Link to="/register">Registrate</Link></p>
              

            </div>
          </div>
        </div>

        <Footer />

      </div>
    )
  }
}

export default withRouter(FormLogin);