import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Provider from './context/Provider';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import Perfil from './Pages/Perfil';
import Explorar from './Pages/Explorar';
import CardDetails from './components/CardDetails';
import './App.css';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/comidas" component={Foods} />
            <Route path="/bebidas" component={Drinks} />
            <Route path="/explorar" component={Explorar} />
            <Route path="/comidas/:id" component={CardDetails} />
            <Route path="/bebidas/:id" component={CardDetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
