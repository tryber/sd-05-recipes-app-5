import React from 'react';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { getFoodByName } from '../Services/foodAPI';
import { getDrinksByName } from '../Services/drinkAPI';
import CardFoods from '../components/CardFoods';
import CardDrinks from '../components/CardDrinks';

let checkType = '';
function Cards() {
  const {
    location: { pathname },
  } = useHistory();
  const { setFood, setDrink } = useContext(Context);
  // const [meal, setMeal] = useState(true);
  useEffect(() => {
    if (pathname === '/bebidas') {
      checkType = 'bebidas';
      // setMeal(false);
      getDrinksByName('').then((data) => setDrink(data.drinks));
    } else if (pathname === '/comidas') {
      checkType = 'comidas';
      // setMeal(true);
      getFoodByName('').then((data) => setFood(data.meals));
    }
  }, [pathname]);
  if (checkType === 'bebidas') {
    return <CardDrinks />;
    // if (drink.length === 1) {
    //   return <Redirect to={`/bebidas/${drink[0].idDrink}`} />;
    // }
    // return (
    //   <div>
    //     {drink.slice(0, 12).map((element, index) => (
    //       <div key ={element.idDrink} data-testid={`${index}-recipe-card`}>
    //         <p data-testid={`${index}-card-name`}>{element.strDrink}</p>
    //         <img
    //           data-testid={`${index}-card-img`}
    //           src={element.strDrinkThumb}
    //           width="15%"
    //           height="15%"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // );
  } else if (checkType === 'comidas') {
    return <CardFoods />;
    // if (food.length === 1) {
    //   return <Redirect to={`/comidas/${food[0].idMeal}`} />;
    // }
    // return (
    //   <div>
    //     {food.slice(0, 12).map((element, index) => (
    //       <div key ={element.idMeal} data-testid={`${index}-recipe-card`}>
    //         <p data-testid={`${index}-card-name`}>{element.strMeal}</p>
    //         <img
    //           data-testid={`${index}-card-img`}
    //           src={element.strMealThumb}
    //           width="15%"
    //           height="15%"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // );
  }

  return (
    <p>Oi</p>
  );
}

export default Cards;
