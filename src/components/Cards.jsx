import React from 'react';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { getFoodByName } from '../Services/foodAPI';
import { getDrinksByName } from '../Services/drinkAPI';
import CardFoods from '../components/CardFoods';
import CardDrinks from '../components/CardDrinks';
import CategoriesD from '../components/CategoriesD';
import CategoriesF from '../components/CategoriesF';

let checkType = '';
function Cards() {
  const {
    location: { pathname },
  } = useHistory();
  const { setFood, setDrink, ingDC, ingFC } = useContext(Context);
  // const [meal, setMeal] = useState(true);
  useEffect(() => {
    if (pathname === '/bebidas' && !ingDC) {
      checkType = 'bebidas';
      // setMeal(false);
      getDrinksByName('').then((data) => setDrink(data.drinks));
    } else if (pathname === '/comidas' && !ingFC) {
      checkType = 'comidas';
      // setMeal(true);
      getFoodByName('').then((data) => setFood(data.meals));
    }
  }, [pathname]);
  if (checkType === 'bebidas' || ingDC) {
    return (
      <div>
        <CategoriesD />
        <CardDrinks />
      </div>
    );
  } else if (checkType === 'comidas' || ingFC) {
    return (
      <div>
        <CategoriesF />
        <CardFoods />;
      </div>
    );
  }

  return <p>Oi</p>;
}

export default Cards;
