import React, { useContext, useEffect } from 'react';

import Context from '../context/Context';
import { getDrinksCategories, getDCatFiltered, getDrinksByName } from '../Services/drinkAPI';

let checkFilter = '';
function CategoriesD() {
  const { setCategories, categories, setDrink } = useContext(Context);
  useEffect(() => {
    getDrinksCategories().then((data) => setCategories(data.drinks));
  }, []);

  function onC(cat) {
    if (cat === checkFilter) {
      getDrinksByName('').then((data) => setDrink(data.drinks));
    } else {
      getDCatFiltered(cat).then((data) => setDrink(data.drinks));
      checkFilter = cat;
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
export default CategoriesD;
