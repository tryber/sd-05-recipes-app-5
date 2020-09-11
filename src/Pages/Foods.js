import React from 'react';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/initialRecipes';
import { getFoodByName } from '../Services/foodAPI';

function Foods() {
  return (
    <div>
      <h1>Comidas</h1>
      <Footer />
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  getRecipes: (meals) => dispatch(fetchRecipes(getFoodByName)),
});

export default connect (null, mapDispatchToProps)(Foods);
