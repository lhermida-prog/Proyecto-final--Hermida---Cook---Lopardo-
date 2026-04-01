import React from "react";
import Header from '../../Components/Header-Footer/Header';
import Footer from '../../Components/Header-Footer/Footer';
import Buscador from '../../Components/Buscador/Buscador';
import PaginaPeliculas from '../Pagina-Peliculas/Pagina-Peliculas';
import '../../App.css';


function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <Header/>
        <Buscador/>
        <PaginaPeliculas/>
        


        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Home;