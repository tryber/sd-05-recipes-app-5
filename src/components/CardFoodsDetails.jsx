import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getFoodsById } from '../Services/foodAPI';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import Recomendation from '../components/Recomendation';
import CardBtn from './inputs/cardBtn';
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

function CardFoodsDetails() {
  const { id } = useParams();
  const { food, setFood } = useContext(Context);
  const [listFood, setListFood] = useState([]);
  const [listMeasure, setListMeasure] = useState([]);

  useEffect(() => {
    getFoodsById(id).then((data) => setFood(data.meals));
  }, []);

  useEffect(() => {
    setListFood(ingredients(food));
  }, [food]);

  useEffect(() => {
    setListMeasure(measure(food));
  }, [food]);

  return (
    <div data-testid="0-recipe-card">
      {food.map((ele) => (
        <div>
          <img alt={ele.strMeal} src={ele.strMealThumb} data-testid="recipe-photo" />
          <div className="cDetails">
            <div>
              <p data-testid="recipe-title">{ele.strMeal}</p>
            </div>
            <div>
              <img alt="share" src={shareIcon} data-testid="share-btn" />
              <img alt="fav" src={favIcon} data-testid="favorite-btn" />
            </div>
          </div>
          {/* <FavBtn /> */}
          <p data-testid="recipe-category">{ele.strCategory}</p>
          {listMeasure ? (
            <div>
              {listMeasure
                .filter((el) => el !== ' - ' && el !== '')
                .map((element, i) => (
                  <p data-testid={`${i}-ingredient-name-and-measure`}>
                    {listFood[i]} - {element}
                  </p>
                ))}
            </div>
          ) : (
            <div>{console.log('oi')}</div>
          )}
          <p data-testid="instructions">{ele.strInstructions}</p>
          <div data-testid="video">
            <iframe src={food.strYoutube && food.strYoutube.replace('watch?v=', 'embed/')} />
          </div>
          <Recomendation />
        </div>
      ))}
      <Link to={`/comidas/${id}/in-progress`}>
        <CardBtn data-testid="start-recipe-btn" className="start-recipe" />
      </Link>
    </div>
  );
}

export default CardFoodsDetails;
