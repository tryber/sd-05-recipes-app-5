import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Context from '../context/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getRandomDrinks } from '../Services/drinkAPI';

function ExplorarB() {
  const { setDrink, drink } = useContext(Context);
  function handleClick() {
    getRandomDrinks('').then((data) => setDrink(data.drinks));
  }
  if (drink.length === 1) return <Redirect to={`/bebidas/${drink[0].idDrink}`} />;
  return (
    <div>
      <Header hideSearch>Explorar Bebidas</Header>
      <Link to="/explorar/bebidas/ingredientes">
        <button data-testid="explore-by-ingredient" type="button">
          Por Ingredientes
        </button>
      </Link>
      <button onClick={() => handleClick()} data-testid="explore-surprise" type="button">
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorarB;
