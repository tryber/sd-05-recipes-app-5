import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { getFoodsById } from '../Services/foodAPI';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import InProgressBtn from '../components/inputs/inProgressBtn';
// import FavBtn from '../components/FavBtn';

function ingredients(food) {
  if (food.length !== 0) {
    const listIng = [];
    for (let i = 1; i <= 15; i += 1) {
      const ing = `strIngredient${i}`;
      listIng.push(food[0][ing]);
    }
    return listIng;
  }
  return null;
}

function measure(food) {
  if (food.length !== 0) {
    const listMeas = [];
    for (let i = 1; i <= 15; i += 1) {
      const meas = `strMeasure${i}`;
      listMeas.push(food[0][meas]);
    }
    return listMeas;
  }
  return null;
}

function FoodProgress() {
  const { id } = useParams();
  const { setFood, food } = useContext(Context);
  const [listFood, setListFood] = useState([]);
  const [listMeasure, setListMeasure] = useState([]);

  useEffect(() => {
    getFoodsById(id).then((data) => setFood(data.meals));
  }, []);

  useEffect(() => {
    setListFood(ingredients(food),
    setListMeasure(measure(food)));
  }, [food]);

  return (
    <Fragment>
      <div>
        {food.map((ele) => (
          <div>
            <img alt={ele.strMeal} src={ele.strMealThumb} data-testid="recipe-photo" />
            <p data-testid="recipe-title">{ele.strMeal}</p>
            <img alt="share" src={shareIcon} data-testid="share-btn" />
            <img alt="fav" src={favIcon} data-testid="favorite-btn" />
            {/* <FavBtn /> */}
            <p data-testid="recipe-category">{ele.strCategory}</p>
            {listMeasure ? (
              <ul>
                {listMeasure
                .filter((el) => el !== ' - ' && el !== '')
                .map((element, i) => (
                  <li data-testid={`${i}-ingredient-step`}>
                    <input type="checkbox" data-testid={`${i}-ingredient-name-and-measure`} />
                    {listFood[i]} - {element}
                  </li>
                ))}
              </ul>
            ) : (
              <div>{console.log('oi')}</div>
            )}
            <p data-testid="instructions">{ele.strInstructions}</p>
          </div>
        ))}
        <Link to={'/receitas-feitas'}>
          <InProgressBtn className="start-recipe" data-testid="finish-recipe-btn" />
        </Link>
      </div>
    </Fragment>
  );
}

export default FoodProgress;
