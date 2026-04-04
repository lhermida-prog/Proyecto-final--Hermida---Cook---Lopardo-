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
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <section className="rowcards" id="movies">
        <PaginaPeliculas/>
        </section>
        <h2 class="alert alert-warning">TV shows airing today</h2>
        <section class="row cards" id="on-air-today">
          
        </section>
        


        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Home;