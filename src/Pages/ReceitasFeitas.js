import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import { getFoodByIngredients, getFoodIngredients } from '../Services/foodAPI';

class ReceitasFeitas extends Component {
  render() {
    // const btnFiltro = colocar All, Food, Drinks;
    // preciso chamar API
    // Filtrar resultado e mapear
    // retornar isso para o botão
    return (
      <div>
        <Header />
        <div>
          <h1>Nome da Receita</h1>
          <h1>Categoria</h1>
          <h1>Área</h1>
          <h1>Data da Receita</h1>
        </div>
        <div>
          <Link>
            <button>All</button>
          </Link>
          <Link>
            <button>Food</button>
          </Link>
          <Link>
            <button>Drinks</button>
          </Link>
        </div>
        <button data-testid="filter-by-all-btn">Compartilhar</button>
        giuliano travou aqui
      </div>
    );
  }
}

// data-testid="filter-by-food-btn"

// src/images/shareIcon.svg (botão compartilhar)

export default ReceitasFeitas;
