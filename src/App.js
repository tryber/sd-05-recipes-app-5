import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Foods from './Pages/Foods';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/comidas" component={Foods} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
