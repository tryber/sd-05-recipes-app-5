import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Footer from './components/Footer';
<<<<<<< HEAD
import Explorar from './Pages/Explorar';
import Comidas from './Pages/ExplorarComidas';
import Bebidas from './Pages/ExplorarBebidas';
=======
import Comidas from './components/comidas';
>>>>>>> 6fe97da8c3829252f49c254a81bb68b79d1bcebb
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/footer" component={Footer} />
<<<<<<< HEAD
          <Route path="/explorar" component={Explorar} />
          <Route path="/comidas" component={Comidas} />
          <Route path="/bebidas" component={Bebidas} />
          {/* <Route path="/comidas/{id-da-receita}" component={IdReceitaComida} />
=======
          <Route path="/comidas" component={Comidas} />
          {/* <Route path="/bebidas" component={Bebidas} />
          <Route path="/comidas/{id-da-receita}" component={IdReceitaComida} />
>>>>>>> 6fe97da8c3829252f49c254a81bb68b79d1bcebb
          <Route parth="/bebidas/{id-da-receita}" component={IdReceitaBebida} />
          <Route path="/comidas/{id-da-receita}/in-progress" component={IdComidaInProgress} />
          <Route path="/bebidas/{id-da-receita}/in-progress" component={IdBebidaInProgress} />
          <Route path="/explorar/comidas" component={ExplorarComidas} />
          <Route path="/explorar/bebidas" component={ExplorarBebidas} />
          <Route path="/explorar/comidas/ingredientes" component={ExplorarComidasIngredientes} />
          <Route path="/explorar/bebidas/ingredientes" component={ExplorarBebidasIngredientes} />
          <Route path="/explorar/comidas/area" component={ExplorarComidasArea} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/receitas-feitas" component={ReceitasFeitas} />
          <Route path="/receitas-favoritas" component={ReceitasFavoritas} /> */}
        </Switch>
      </BrowserRouter>
<<<<<<< HEAD
      <Login />
      <Explorar />
      <Comidas />
      <Bebidas />
      <Footer />
=======
>>>>>>> 6fe97da8c3829252f49c254a81bb68b79d1bcebb
    </div>
  );
}

export default App;
