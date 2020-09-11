import {
  REQUEST_RECIPES,
  REQUEST_RECIPES_SUCCESS,
  REQUEST_RECIPES_FAILURE,
} from '../actions/initialRecipes';

const initialState = { isLoading: false, recipes: [] };

const initialRecipesScr = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECIPES:
      return {
        ...state,
        isLoading: true,
      };
    
    case REQUEST_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.data.meals,
      };

    case REQUEST_RECIPES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state;
  };
}

export default initialRecipesScr;
