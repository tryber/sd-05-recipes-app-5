import React, { useContext, useEffect } from 'react';

import Context from '../context/Context';
import { getFoodCategories, getFCatFiltered, getFoodByName } from '../Services/foodAPI';

let checkFilter = '';
function CategoriesF() {
  const { setCategories, categories, setFood } = useContext(Context);

  useEffect(() => {
    getFoodCategories().then((data) => setCategories(data.meals));
  }, []);

  function onC(cat) {
    if (cat === checkFilter) {
      getFoodByName('').then((data) => setFood(data.meals));
    } else {
      getFCatFiltered(cat).then((data) => setFood(data.meals));
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
export default CategoriesF;
