import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import copyToClipboard from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import underC from '../images/underC.png'

const ReceitasDaVovo = (vovo) =>
  vovo.map(
    ({ id, type, area, category, alcoholicOrNot, name, image, doneDate, tags }, index) => (
      <div>
        <Link to={`/${type}s/${id}`}>
          <img
            className="done-receita-img"
            data-testid={`${index}-horizontal-image`}
            src={image}
            alt={image}
          />
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
        <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
        {type === 'comida' && (
          <p>
            <span data-testid={`${index}-${tags[0]}-horizontal-tag`}>{tags[0]}</span>
            <span data-testid={`${index}-${tags[1]}-horizontal-tag`}>{tags[1]}</span>
          </p>
        )}
        <input
          className="done-receita-btn"
          onClick={() => {
            document.getElementById('share-btn').innerHTML = 'Link copiado!';
            copyToClipboard(`http://localhost:3000/${type}s/${id}`);
          }}
          id="share-btn"
          data-testid={`${index}-horizontal-share-btn`}
          type="image"
          src={shareIcon}
          alt="share icon"
        />
      </div>
    ),
  );

const ReceitasFeitas = () => {
  const [vovo, setVovo] = useState([]);
  const [receita, setReceitas] = useState([]);
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setReceitas(storage);
    setVovo(storage);
  }, [setVovo, setReceitas]);
  return (
    <div>
      <Header hideSearch>Receitas Feitas</Header>
      <div>
        <button className="btn btn-dark topButtons2" onClick={() => setVovo(receita)} data-testid="filter-by-all-btn">
          All
        </button><br/>
        <button
          onClick={() => setVovo(receita.filter((recipe) => recipe.type === 'comida'))}
          data-testid="filter-by-food-btn"
          className="btn btn-dark topButtons2"
        >
          Food
        </button><br/>
        <button
          onClick={() => setVovo(receita.filter((recipe) => recipe.type === 'bebida'))}
          data-testid="filter-by-drink-btn"
          className="btn btn-dark topButtons2"
        >
          Drinks
        </button><br/>
      </div>
        <img className='underC' src={underC} />
      {ReceitasDaVovo(vovo)}
    </div>
  );
};

export default ReceitasFeitas;
