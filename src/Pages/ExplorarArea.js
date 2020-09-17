import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';
import { getFood, getFoodAreas, getFoodByArea } from '../Services/foodAPI';

const james = (jamesArray) =>
  jamesArray.map((food, index) => (
    <div key={food.strMeal} data-testid={`${index}-recipe-card`}>
      <Link to={`/comidas/${food.idMeal}`}>
        <img data-testid={`${index}-card-img`} src={food.strMealThumb} alt="food logo" />
        <p data-testid={`${index}-card-name`}>{food.strMeal}</p>
      </Link>
    </div>
  ));

const selectArea = (setFood, setArea, dataAreas, setFoodArea) => (
  <select
    onClick={({ target }) => {
      if (target.value !== 'all') setFoodArea(target.value);
      else {
        setArea(false);
        getFood().then((data) => setFood(data.meals.slice(0, 12)));
      }
    }}
    className="select-area"
    data-testid="explore-by-area-dropdown"
  >
    <option value="all" data-testid="All-option">
      All
    </option>
    {dataAreas.map(({ strArea }) => (
      <option key={strArea} value={strArea} data-testid={`${strArea}-option`}>
        {strArea}
      </option>
    ))}
  </select>
);

const Blablabla = () => {
    const {
        food,
        setFood,
        dataFoodAreas,
        setDataFoodAreas,
        foodArea,
        setFoodArea,
        } = useContext(Context);
useEffect(() => {
    getFoodAreas().then((data) => setDataFoodAreas(data.meals));
    }, [setDataFoodAreas]);
useEffect(() => {
    if (foodArea) {
        getFoodByArea(foodArea).then((data) => setFood(data.meals.slice(0, 12)));
            }
          }, [foodArea, setFood]);
let foodArray = food;
  if (!Array.isArray(food)) {
    foodArray = [];
    alert('Não tem pão velho');
  } else if (!foodArea && food.length === 1) {
    return <Redirect to={`/comidas/${food[0].idMeal}`} />;
  } else if (food.length === 0) getFood().then((data) => setFood(data.meals.slice(0, 12)));
  if (foodArray.length > 12) foodArray = foodArray.slice(0, 12);

  return (
    <div>
      <Header>Explorar Origem</Header>
      {selectArea(setFood, foodArea, dataFoodAreas, setFoodArea)}
      {james(foodArray)}
      <Footer />
    </div>
  );
};

export default Blablabla;
