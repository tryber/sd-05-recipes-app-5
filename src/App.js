import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Footer from './components/Footer';
import Comidas from './components/comidas';
import './App.css';
import Header from './components/Header';
// import AImage from './components/animatedimage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/footer" component={Footer} />
          <Route path="/comidas" component={Comidas} />
          {/* <Route path="/bebidas" component={Bebidas} />
          <Route path="/comidas/{id-da-receita}" component={IdReceitaComida} />
          <Route parth="/bebidas/{id-da-receita}" component={IdReceitaBebida} />
          <Route path="/comidas/{id-da-receita}/in-progress" component={IdComidaInProgress} />
          <Route path="/bebidas/{id-da-receita}/in-progress" component={IdBebidaInProgress} />
          <Route path="/explorar" component={Explorar} />
          <Route path="/explorar/comidas" component={ExplorarComidas} />
          <Route path="/explorar/bebidas" component={ExplorarBebidas} />
          <Route path="/explorar/comidas/ingredientes" component={ExplorarComidasIngredientes} />
          <Route path="/explorar/bebidas/ingredientes" component={ExplorarBebidasIngredientes} />
          <Route path="/explorar/comidas/area" component={ExplorarComidasArea} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/receitas-feitas" component={ReceitasFeitas} />
          <Route path="/receitas-favoritas" component={Favoritas} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
