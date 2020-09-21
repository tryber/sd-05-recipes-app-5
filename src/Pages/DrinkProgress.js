import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDrinksById } from '../Services/drinkAPI';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import Recomendation from '../components/Recomendation';
import InProgressBtn from '../components/inputs/inProgressBtn';

function preenche(drinkP) {
  if (drinkP.length !== 0) {
    const vet1 = [];
    let conCat = '';
    for (let i = 1; i <= 15; i += 1) {
      const propri = `strIngredient${i}`;
      const propri2 = `strMeasure${i}`;
      conCat = `${drinkP[0][propri]} ${drinkP[0][propri2]}`;
      vet1.push(conCat);
    }
    return vet1;
  }
  return null;
}
function CardDrinksDetails() {
  const { id } = useParams();
  const { setDrink, drink } = useContext(Context);
  const [aux1, setAux1] = useState([]);
  useEffect(() => {
    getDrinksById(id).then((data) => setDrink(data.drinks));
  }, []);
  useEffect(() => {
    setAux1(preenche(drink));
  }, [drink]);

  return (
    <div>
      <div>
        {drink.map((ele) => (
          <div>
            <img alt={ele.strDrink} src={ele.strDrinkThumb} data-testid="recipe-photo" />
            <div className="cDetails">
              <div>
                <p data-testid="recipe-title">{ele.strDrink}</p>
              </div>
              <div>
                <img alt="share" src={shareIcon} data-testid="share-btn" />
                <img alt="fav" src={favIcon} data-testid="favorite-btn" />
              </div>
            </div>
            <p data-testid="recipe-category">
              {ele.strCategory}
              {ele.strAlcoholic}
            </p>
            {aux1 ? (
              <ul>
                {aux1
                  .filter((el) => el !== 'null null' && el !== ' ')
                  .map((element, index) => (
                    <li data-testid={`${index}-ingredient-step`}>
                      <input type="checkbox" data-testid={`${index}-ingredient-name-and-measure`} />
                      {element}
                    </li>
                  ))}
              </ul>
            ) : (
              <div>{console.log('oi')}</div>
            )}
            <p data-testid="instructions">{ele.strInstructions}</p>
            <Recomendation />
          </div>
        ))}
      </div>
      <Link to={'/receitas-feitas'}>
        <InProgressBtn className="start-recipe" data-testid="finish-recipe-btn" />
      </Link>
    </div>
  );
}

export default CardDrinksDetails;
