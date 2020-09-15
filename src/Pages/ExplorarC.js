import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Context from '../context/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getRandomFood } from '../Services/foodAPI';

function ExplorarC() {
  const { setFood, food } = useContext(Context);
  function handleClick() {
    getRandomFood('').then((data) => setFood(data.meals));
  }
  if (food.length === 1) return <Redirect to={`/comidas/${food[0].idMeal}`} />;
  return (
    <div>
      <Header hideSearch>Explorar Comidas</Header>
      <Link to="/explorar/comidas/ingredientes">
        <button data-testid="explore-by-ingredient" type="button">
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button data-testid="explore-by-area" type="button">
          Por Local de Origem
        </button>
      </Link>
      <button onClick={() => handleClick()} data-testid="explore-surprise" type="button">
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorarC;
