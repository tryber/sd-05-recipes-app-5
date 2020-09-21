import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';
import { getDrinksByIngredients, getDrinksIngredients } from '../Services/drinkAPI';

const DrinksIngredients = () => {
  const [ing, setIng] = useState([]);
  const { setDrink, setIngDC } = useContext(Context);

  const hC = (ingLogo) => {
    getDrinksByIngredients(ingLogo).then((data) => {
      setDrink(data.drinks);
    });
    setIngDC(true);
    // return ing;
  };

  const covid = () =>
    ing.map((ingLogo, index) => (
      <Link to="/bebidas">
        <button
          key="ingLogo.strDrink"
          data-testid={`${index}-ingredient-card`}
          onClick={() => hC(ingLogo.strIngredient1)}
          className="Foood btn-dark"
        >
          <img
            data-testid={`${index}-card-img`}
            src={`https://www.thecocktaildb.com/images/ingredients/${ingLogo.strIngredient1}-Small.png`}
            alt="ingrediente logo"
          />
          <p data-testid={`${index}-card-name`}>{ingLogo.strIngredient1}</p>
        </button>
      </Link>
    ));

  useEffect(() => {
    getDrinksIngredients().then((data) => setIng(data.drinks));
  }, []);

  if (ing.length > 12) setIng(ing.slice(0, 12));

  return (
    <div>
      <Header hideSearch>Explorar Ingredientes</Header><br/>
      {covid(ing)}
      <Footer />
    </div>
  );
};
export default DrinksIngredients;
