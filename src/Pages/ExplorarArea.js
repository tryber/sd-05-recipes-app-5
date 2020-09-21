import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import { getFoodByName, getFoodAreas, getFoodByArea } from '../Services/foodAPI';
import Footer from '../components/Footer';
import Header from '../components/Header';

const fulfillFoods = (foods) => (
  <div className='oi'>
    {foods.slice(0, 12).map((el, i) => (
      <Link to={`/comidas/${el.idMeal}`}>
        <div className='Foood'data-testid={`${i}-recipe-card`}>
          <p data-testid={`${i}-card-name`}>{el.strMeal}</p>
          <img className='fotoComida'alt={el.strMeal} data-testid={`${i}-card-img`} src={el.strMealThumb} heigth="15%" width="15%" />
        </div>
      </Link>
    ))}
  </div>
);

function ExplorarArea() {
  const [areas, setArea] = useState();
  const [a2, setA2] = useState();
  const { food, setFood } = useContext(Context);

  function hC(area) {
    setA2(area);
  }
  const selectArea = (sAreas) => (
    <select className='form-control btn-dark'data-testid="explore-by-area-dropdown" onChange={(e) => hC(e.target.value)}>
      <option value="all" data-testid="All-option">
        All
      </option>
      {sAreas.map((el) => (
        <option data-testid={`${el.strArea}-option`} value={el.strArea} key={el.strArea}>
          {el.strArea}
        </option>
      ))}
    </select>
  );
  useEffect(() => {
    getFoodAreas().then((data) => setArea(data.meals));
    getFoodByName('').then((data) => setFood(data.meals));
  }, []);
  useEffect(() => {
    getFoodByArea(a2).then((data) => setFood(data.meals));
  }, [a2]);

  return (
    <div>
      <Header>Explorar Origem</Header><br/>
      {areas ? selectArea(areas) : <div> oiiii </div>}<br/>
      {food ? fulfillFoods(food) : <div> oi2 </div>}
      <Footer />
    </div>
  );
}
export default ExplorarArea;
