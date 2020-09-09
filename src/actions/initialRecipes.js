import API from '../../Services/';

export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export const REQUEST_RECIPES_SUCCESS = 'REQUEST_RECIPES_SUCCESS';
export const REQUEST_RECIPES_FAILURE = 'REQUEST_RECIPES_FAILURE';

const request_recipes = () => ({
  type: REQUEST_RECIPES,
});

const request_recipes_success = () => ({
  type: REQUEST_RECIPES_SUCCESS,
  data,
});

const request_recipes_failure = () => ({
  type: REQUEST_RECIPES_FAILURE,
  error,
});


