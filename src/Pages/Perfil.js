import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const aE = {
  email: JSON.parse(localStorage.getItem('user')),
};
function hC() {
  localStorage.clear();
  console.log('punkRock');
}

export default class Perfil extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <p data-testid="profile-email">{aE.email.email}</p>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">
          Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
        </Link>
        <Link to="/">
          <button
            onClick={() => hC()}
            type="button"
            data-testid="profile-logout-btn"
          >
          Sair
          </button>
        </Link>
        <Footer />
      </div>
    );
  }
}
