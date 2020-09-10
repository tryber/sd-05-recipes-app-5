import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
      <Login />
      <Explorar />
      <Comidas />
      <Bebidas />
      <Footer />
    </div>
  );
}

export default App;
