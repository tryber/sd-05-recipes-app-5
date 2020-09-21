import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';
import { getFoodByIngredients, getFoodIngredients } from '../Services/foodAPI';

const FoodsIngredients = () => {
  const [ing, setIng] = useState([]);
  const { setFood, setIngFC } = useContext(Context);
  const history = useHistory();

  const hC = (ingLogo) => {
    getFoodByIngredients(ingLogo).then((data) => {
      setFood(data.meals);
    });
    setIngFC(true);
    history.push('/comidas');
    // return ing;
  };

  const antonio = () =>
    ing.map((ingLogo, index) => (
      <button
        key="ingLogo.strIngredient"
        data-testid={`${index}-ingredient-card`}
        onClick={() => hC(ingLogo.strIngredient)}
        className="Foood btn-dark"
      >
        <img
          data-testid={`${index}-card-img`}
          
          src={`https://www.themealdb.com/images/ingredients/${ingLogo.strIngredient}-Small.png`}
          alt="ingrediente logo"
        />
        <p data-testid={`${index}-card-name`}>{ingLogo.strIngredient}</p>
      </button>
    ));

  useEffect(() => {
    getFoodIngredients().then((data) => setIng(data.meals));
  }, []);

  if (ing.length > 12) setIng(ing.slice(0, 12));

  return (
    <div>
      <Header hideSearch>Explorar Ingredientes</Header><br/>
      {antonio(ing)}
      <Footer />
    </div>
  );
};
export default FoodsIngredients;
