// import React, { useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import Context from '../context/Context';
// import { getDrinksCategories, getDCatFiltered, getDrinksByName } from '../Services/drinkAPI';
// import { getFoodCategories, getFCatFiltered, getFoodByName } from '../Services/foodAPI';

// let checkF = false;
// function Categories() {
//   const {
//     location: { pathname },
//   } = useHistory();
//   const { setCategories, categories, setFood, setDrink } = useContext(Context);
//   useEffect(() => {
//     if (pathname === '/bebidas') {
//       getDrinksCategories().then((data) => setCategories(data.drinks));
//     } else if (pathname === '/comidas') {
//       getFoodCategories().then((data) => setCategories(data.meals));
//     }
//   }, [pathname]);

//   function onC(cat) {
//     if (pathname === '/comidas') {
//       if(checkF){
//         getFoodByName('').then((data) => setFood(data.meals))
//         checkF = false;
//       }else {
//         getFCatFiltered(cat).then((data) => setFood(data.meals))
//         checkF = true;
//       }
//     } else if (pathname === '/bebidas') {
//       if(checkF){
//         getDrinksByName('').then((data) => setDrink(data.drinks));
//         checkF = false;
//       }else {
//         getDCatFiltered(cat).then((data) => setDrink(data.drinks));
//         checkF = true;
//       }
//     }
//   }
//   return (
//     <div>
//       {categories.slice(0, 5).map((element) => (
//         <div>
//           <button
//             data-testid={`${element.strCategory}-category-filter`}
//             onClick={(e) => onC(e.target.value)}
//             value={element.strCategory}
//           >
//             {element.strCategory}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Categories;
