import React from 'react';

class InProgressBtn extends React.Component {
  render() {
    return (
      <button type="button" className="start-recipe" data-testid="finish-recipe-btn">
        Finalizar Receita
      </button>
    );
  }
}
export default InProgressBtn;
