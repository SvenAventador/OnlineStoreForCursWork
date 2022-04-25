// Страница для написании логики маршрутизации по сайту
import React from 'react'
import { Route, Routes, Redirect, Router} from 'react-router-dom' // Switch - оборачивание динамический маршрутов
                                                                          // Route - маршрутизация
                                                                          // Redirect - перенаправление
import { authRouter, publicRouter } from '../router';
const AppRouter = () => {

  const isAuth = false;

  return (
      <Routes>

        {isAuth && authRouter.map(({ path, Component }) =>
          <Route key={path} path={path} exact element={<Component/>} /> // настройка пути с последующей маршрутизацией и валидацией на авторизированного пользователя
                                                                       // (ключ нужен для того, чтобы показать, что все пути уникальны)
        )}

        {publicRouter.map(({ path, Component }) =>
          <Route key={path} path={path} exact element={<Component/>} /> // настройка пути с последующей маршрутизацией без валидацией на авторизированного пользователя
                                                                       // (ключ нужен для того, чтобы показать, что все пути уникальны)
        )}

      </Routes>
  );

};

export default AppRouter;
