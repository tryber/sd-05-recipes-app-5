import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Provider from './context/Provider';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import Perfil from './Pages/Perfil';
import Explorar from './Pages/Explorar';
import CardDetails from './components/CardDetails';
import ExplorarC from './Pages/ExplorarC';
import ExplorarB from './Pages/ExplorarB';
import FoodsIngredients from './Pages/ExplorIngFood';
import DrinksIngredients from './Pages/ExplorIngDrink';
import ExplorarArea from './Pages/ExplorarArea';
import FoodProgress from './Pages/FoodProgress';
import DrinkProgress from './Pages/DrinkProgress';
import error404 from './Pages/error404';
import ReceitasFeitas from './Pages/ReceitasFeitas';
import ReceitasFavoritas from './Pages/ReceitasFavoritas';

import './App.css';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/explorar/comidas/ingredientes" component={FoodsIngredients} />
            <Route path="/explorar/bebidas/ingredientes" component={DrinksIngredients} />
            <Route path="/explorar/comidas/area" component={ExplorarArea} />
            <Route path="/comidas/:id/in-progress" component={FoodProgress} />
            <Route path="/bebidas/:id/in-progress" component={DrinkProgress} />
            <Route path="/comidas/:id" component={CardDetails} />
            <Route path="/bebidas/:id" component={CardDetails} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/comidas" component={Foods} />
            <Route path="/bebidas" component={Drinks} />
            <Route path="/explorar/bebidas/area" component={error404} />
            <Route path="/explorar/comidas" component={ExplorarC} />
            <Route path="/explorar/bebidas" component={ExplorarB} />
            <Route path="/explorar" component={Explorar} />
            <Route path="/receitas-feitas" component={ReceitasFeitas} />
            <Route path="/receitas-favoritas" component={ReceitasFavoritas} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
