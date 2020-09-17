// import React from 'react';
// import { Link } from 'react-router-dom;';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// // import Context from '../context/Context';
// import { getFood } from '../Services/foodAPI';

// const james = (jamesArray) =>
//   jamesArray.map((food, index) => (
//     <div key={food.strMeal} data-testid={`${index}-recipe-card`}>
//       <Link to={`/comidas/${food.idMeal}`}>
//         <img data-testid={`${index}-card-img`} src={food.strMealThumb} alt="food logo" />
//         <p data-testid={`${index}-card-name`}>{food.strMeal}</p>
//       </Link>
//     </div>
//   ));

// const selectArea = (setFood,  setArea) => (
//   <select
//     onClick={({ target }) => {
//       if (target.value !== 'all') setArea(target.value);
//       else {
//         setArea(false);
//         getFood().then((data) => setFood(data.meals.slice(0, 12)));
//       }
//     }}
//     className="select-area"
//     data-testid="explore-by-area-dropdown"
//   >
//     <option value="all" data-testid="All-option">
//       All
//     </option>
//     {dataAreas.map(({ strArea }) => (
//       <option key={strArea} value={strArea} data-testid={`${strArea}-option`}>
//         {strArea}
//       </option>
//     ))}
//   </select>
// );

// const blablabla = () => {
//   return (
//     <div>
//       <Header>Explorar Origem</Header>
//       <Footer />
//     </div>
//   );
// };
