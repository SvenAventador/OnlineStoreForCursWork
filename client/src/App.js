import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // следует использовать, если на сервере обрабатываются динамические запросы
import AppRouter from './components/AppRouter';

const App = () => {

  return (

    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>

  );

};

export default App;
