import React from 'react';
import Header from "./Components/Header-Footer/Header"
import './App.css';
import Footer from './Components/Header-Footer/Footer';
import Buscador from "./Components/Buscador/Buscador";


function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <Header/>
        <Buscador/>
        


        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Home;