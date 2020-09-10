import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Aguardando REDUCERS E ACTIONS para ser importado
// e conectar com a função

class Explorar extends Component {
  render() {
    return (
      <div>
        <Link to="/comidas">
          <button type="button" data-testid="explore-food">EXPLORAR COMIDAS
          </button>
        </Link>
        <Link to="/bebidas">
          <button type="button" data-testid="explore-drinks">EXPLORAR BEBIDAS
          </button>
        </Link>
      </div>
    )
  }
}

export default Explorar;