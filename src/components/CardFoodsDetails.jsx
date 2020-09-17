import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFoodsById } from '../Services/foodAPI';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';

function CardFoodsDetails() {
  const { id } = useParams();
  const { setFood, food } = useContext(Context);

  useEffect(() => {
    getFoodsById(id).then((data) => setFood(data.meals));
  }, []);

  return (
    <div>
      {food.map((ele) => (
        <div>
          <img alt={ele.strMeal} src={ele.strMealThumb} data-testid="recipe-photo" />
          <p data-testid="recipe-title">{ele.strMeal}</p>
          <img alt="share" src={shareIcon} data-testid="share-btn" />
          <img alt="fav" src={favIcon} data-testid="favorite-btn" />
          <p data-testid="recipe-category">{ele.strCategory}</p>
        </div>
      ))}
    </div>
  );
}

export default CardFoodsDetails;
