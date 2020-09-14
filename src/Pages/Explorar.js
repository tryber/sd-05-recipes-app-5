import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Explorar = () => (
  <div>
    <Header hideSearch>Explorar</Header>
    <Link to="/explorar/comidas" data-testid="explore-food" className="btn">
      Explorar Comidas
    </Link>
    <Link to="/explorar/bebidas" data-testid="explore-drinks" className="btn">
      Explorar Bebidas
    </Link>
    <Footer />
  </div>
);

export default Explorar;
