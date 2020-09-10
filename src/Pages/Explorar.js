import React, { Component } from 'react';
// import Link from 'react-router-dom';

// Aguardando REDUCERS E ACTIONS para ser importado
// e conectar com a função

class Explorar extends Component {
  constructor(props) {
    super(props);
      this.state = {
        explorarComida: '',
        explorarBebida: '',
      };
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange = event => {
    const { explorarBebida, explorarComida } = event.target;
    this.setState({ click: value });
  }

  render() {
    return (
      <div>
        <label htmlFor="explorar-comidas">
          <span>EXPLORAR COMIDAS</span>
          <input
            type="text"
            data-testid="explorar-comidas"
            name="explorar-comidas"
          />
        </label>
        <label htmlFor="explorar-comidas">
          <span>EXPLORAR BEBIDAS</span>
          <input
            type="text"
            data-testid="explore-drinks"
            name="explorar-bebidas"
          />
        </label>
{/*         <Link>
          <button>
            type="text" data-testid="explore-bottom-btn"
          </button>
        </Link>
        <Link>
          <button>
            type="text" data-testid="food-bottom-btn"
          </button>
        </Link> */}
      </div>
    )
  }
}

// falta passar mapToStateToProps e mapDispatch

export default Explorar;