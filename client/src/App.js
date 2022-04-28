import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // следует использовать, если на сервере обрабатываются динамические запросы
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite'
import { Context } from './index.js';
import { check } from './API/userAPI';
import { Spinner } from 'react-bootstrap';


const App = observer(() => {

  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true) // загрузка для того, чтобы првоерить токен на валидность

  useEffect(() => {

    setTimeout(() => {

      check().then(data => {

        user.setUser(true)
        user.setIsAuth(true)

      }).finally(() => setLoading(false))

    }, 3000)

  }, [])

  if (loading) {

    return <Spinner animation={"border"} />

  }


  return (

    <BrowserRouter>
      <NavBar />

      <AppRouter />
    </BrowserRouter>

  );

});

export default App;
