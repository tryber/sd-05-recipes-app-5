import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { getDrinksCategories } from '../Services/drinkAPI';
import { getFoodCategories } from '../Services/foodAPI';

function Categories() {
  const {
    location: { pathname },
  } = useHistory();
  const { setCategories, categories } = useContext(Context);
  useEffect(() => {
    if (pathname === '/bebidas') {
      getDrinksCategories().then((data) => setCategories(data.drinks));
    } else if (pathname === '/comidas') {
      getFoodCategories().then((data) => setCategories(data.meals));
    }
  }, [pathname]);
  return (
    <div>
      {categories.slice(0, 5).map((element) => (
        <div>
          <button data-testid={`${element.strCategory}-category-filter`}>
            {element.strCategory}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Categories;
