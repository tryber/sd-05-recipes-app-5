import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { getDrinksCategories, getDCatFiltered } from '../Services/drinkAPI';
import { getFoodCategories, getFCatFiltered } from '../Services/foodAPI';

function Categories() {
  const {
    location: { pathname },
  } = useHistory();
  const { setCategories, categories, setFood, setDrink } = useContext(Context);
  useEffect(() => {
    if (pathname === '/bebidas') {
      getDrinksCategories().then((data) => setCategories(data.drinks));
    } else if (pathname === '/comidas') {
      getFoodCategories().then((data) => setCategories(data.meals));
    }
  }, [pathname]);

  function onC(cat) {
    if (pathname === '/comidas') {
      getFCatFiltered(cat).then((data) => setFood(data.meals));
    } else if (pathname === '/bebidas') {
      getDCatFiltered(cat).then((data) => setDrink(data.drinks));
    }
  }
  return (
    <div>
      {categories.slice(0, 5).map((element) => (
        <div>
          <button
            data-testid={`${element.strCategory}-category-filter`}
            onClick={(e) => onC(e.target.value)}
            value={element.strCategory}
          >
            {element.strCategory}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Categories;
