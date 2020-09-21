import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copyToClipboard from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import underC from '../images/underC.png'

const receitasDaVovo = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

const boomShakalaka = (id, setFavoritas, favoritas) => {
  const aux = favoritas.filter((recipe) => recipe.id !== id);
  setFavoritas(aux);
  return localStorage.setItem('favoriteRecipes', JSON.stringify(aux));
};

const mapFavoriteRecipes = (favoritas, setFavoritas) =>
  favoritas.map(({ id, type, area, category, alcoholicOrNot, name, image }, index) => (
    <div>
      <Link to={`/${type}s/${id}`}>
        <img data-testid={`${index}-horizontal-image`} src={image} alt={image} />
      </Link>
      {type === 'comida' && (
        <p data-testid={`${index}-horizontal-top-text`}>
          {area} - {category}
        </p>
      )}
      {type === 'bebida' && <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>}
      <Link to={`/${type}s/${id}`}>
        <p data-testid={`${index}-horizontal-name`}>{name}</p>
      </Link>
      <input
        onClick={() => {
          copyToClipboard(`http://localhost:3000/${type}s/${id}`);
          document.getElementById('share-btn').innerHTML = 'Link copiado!';
        }}
        id="share-btn"
        data-testid={`${index}-horizontal-share-btn`}
        type="image"
        src={shareIcon}
        alt="share icon"
      />
      <input
        onClick={() => boomShakalaka(id, setFavoritas, favoritas)}
        id="share-btn"
        data-testid={`${index}-horizontal-favorite-btn`}
        type="image"
        src={blackHeartIcon}
        alt="share icon"
      />
    </div>
  ));

const ReceitasFavoritas = () => {
  const [favoritas, setFavoritas] = useState(receitasDaVovo);
  return (
    <div>
      <Header hideSearch>Receitas Favoritas</Header>
      <div>
        <button className="btn btn-dark topButtons2" onClick={() => setFavoritas(receitasDaVovo)} data-testid="filter-by-all-btn">
          All
        </button><br/>
        <button
          onClick={() => setFavoritas(receitasDaVovo.filter((recipe) => recipe.type === 'comida'))}
          data-testid="filter-by-food-btn"
          className="btn btn-dark topButtons2"
        >
          Food
        </button><br/>
        <button
          onClick={() => setFavoritas(receitasDaVovo.filter((recipe) => recipe.type === 'bebida'))}
          data-testid="filter-by-drink-btn"
          className="btn btn-dark topButtons2"
        >
          Drinks
        </button><br/>
      </div>
      <img className='underC' src={underC} />
      {mapFavoriteRecipes(favoritas, setFavoritas)}
    </div>
  );
};

export default ReceitasFavoritas;
