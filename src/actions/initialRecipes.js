
export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export const REQUEST_RECIPES_SUCCESS = 'REQUEST_RECIPES_SUCCESS';
export const REQUEST_RECIPES_FAILURE = 'REQUEST_RECIPES_FAILURE';

const request_recipes = () => ({
  type: REQUEST_RECIPES,
});

const request_recipes_success = (meals) => ({
  type: REQUEST_RECIPES_SUCCESS,
  data: meals,
});

const request_recipes_failure = (error) => ({
  type: REQUEST_RECIPES_FAILURE,
  error,
});

export function fetchRecipes(nomedaapi) {
  return (dispatch) => {
    dispatch(request_recipes());
    return `${nomedaapi}`()
      .then(
        (meals) => dispatch(request_recipes_success(meals)),
        (error) => dispatch(request_recipes_failure(error)),
      );
  };
}
