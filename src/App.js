import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Footer from './components/Footer'; // só testando a renderização
import Header from './components/Header';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <div>
      <Provider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
