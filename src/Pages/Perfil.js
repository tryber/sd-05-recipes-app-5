import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

let aE = '';
if (localStorage.getItem('user')) {
  aE = {
    email: JSON.parse(localStorage.getItem('user')),
  };
}
function hC() {
  localStorage.clear();
}

export default class Perfil extends Component {
  render() {
    return (
      <div>
        <div>
          <Header hideSearch>Perfil</Header>
        </div>
        {aE !== '' ? (
          <p className="usr-email topButtons" data-testid="profile-email">
            Email do usuário: 
            <br/>{aE.email.email}
          </p>
        ) : (
          <p>Sem e-mail</p>
        )}
        <Link to="/receitas-feitas">
          <button class="btn btn-dark topButtons" type="button" data-testid="profile-done-btn">
            Receitas Feitas
          </button>
        </Link><br/>
        <Link to="/receitas-favoritas">
          <button class="btn btn-dark topButtons" type="button" data-testid="profile-favorite-btn">
            Receitas Favoritas
          </button>
        </Link><br/>
        <Link to="/">
          <button class="btn btn-dark topButtons" onClick={() => hC()} type="button" data-testid="profile-logout-btn">
            Sair
          </button>
        </Link>
        <Footer />
      </div>
    );
  }
}
