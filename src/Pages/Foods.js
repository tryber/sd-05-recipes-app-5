import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

class Foods extends React.Component {
  render() {
    return (
      <div>
        <Header>Comidas</Header>
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Foods;
