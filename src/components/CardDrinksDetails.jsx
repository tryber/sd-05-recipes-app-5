import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinksById } from '../Services/drinkAPI';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';
import Recomendation from '../components/Recomendation';
import Footer from './Footer';

function preenche(drink) {
  if (drink.length !== 0) {
    const vet1 = [];
    let conCat = '';
    for (let i = 1; i <= 15; i += 1) {
      const propri = `strIngredient${i}`;
      const propri2 = `strMeasure${i}`;
      conCat = `${drink[0][propri]} ${drink[0][propri2]}`;
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
            <p data-testid="recipe-title">{ele.strDrink}</p>
            <img alt="share" src={shareIcon} data-testid="share-btn" />
            <img alt="fav" src={favIcon} data-testid="favorite-btn" />
            <p data-testid="recipe-category">{ele.strCategory}{ele.strAlcoholic}</p>
            <button type="button" className="start-recipe" data-testid="start-recipe-btn">
              Iniciar Receita
            </button>
            {aux1 ? (
              <div>
                {aux1
                  .filter((el) => el !== 'null null' && el !== '')
                  .map((element, index) => (
                    <p data-testid={`${index}-ingredient-name-and-measure`}>{element}</p>
                  ))}
              </div>
            ) : (
              <div>{console.log('oi')}</div>
            )}
            <p data-testid="instructions">{ele.strInstructions}</p>
            <div>
              <Recomendation />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CardDrinksDetails;
