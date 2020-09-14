import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorar() {
  return (
    <div>
      <Header hideSearch>Explorar</Header>
      <Link to="/explorar/comidas">
        <button data-testid="explore-food"> Explorar Comidas</button>
      </Link>
      <br />
      <Link to="/explorar/bebidas">
        <button data-testid="explore-drinks"> Explorar Bebidas</button>
      </Link>
      <Footer />
    </div>
  );
}

export default Explorar;
