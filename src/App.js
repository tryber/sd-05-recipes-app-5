import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Provider from './context/Provider';
import Foods from './Pages/Foods';
import Drinks from './Pages/Drinks';
import CardDetails from './components/CardDetails';
import './App.css';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/comidas" component={Foods} />
            <Route path="/bebidas" component={Drinks} />
            <Route path="/comidas/:id" component={CardDetails} />
            <Route path="/bebidas/:id" component={CardDetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
