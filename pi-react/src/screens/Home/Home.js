import React from "react";
import Header from '../../Components/Header-Footer/Header';
import Footer from '../../Components/Header-Footer/Footer';
import Buscador from '../../Components/Buscador/Buscador';
import Secciones from '../../Components/Secciones/Secciones';
import '../../App.css';


function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <Header/>
        <Buscador/>
        <section className="rowcards" id="movies">
        <Secciones/>
        </section> 
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Home;