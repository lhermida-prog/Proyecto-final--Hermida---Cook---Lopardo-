import React,{ Component } from "react";

export default class Register extends Component {
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
        <h1>UdeSA Movies</h1>

        <nav>
          <ul className="nav nav-tabs my-4">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="movies.html">Películas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="series.html">Series</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="favorites.html">Favoritas</a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link active" href="register.html">Registro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">Login</a>
            </li>
          </ul>
        </nav>

        <h2 className="alert alert-primary">Registro</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={(e) => this.evitarSubmit(e)}>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.controlarCambios(e)}
                  placeholder="Ingresá tu email"
                />
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.controlarCambios(e)}
                  placeholder="Ingresá tu contraseña"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Registrarse
              </button>

            </form>

            <p className="mt-3 text-center">
              ¿Ya tenés cuenta? <a href="login.html">Iniciar sesión</a>
            </p>

          </div>
        </div>

        <footer className="alert alert-primary mt-4 text-center">
          <p className="mb-0">Integrante 1 | Integrante 2 | Integrante 3</p>
        </footer>

      </div>
    )
}

}

