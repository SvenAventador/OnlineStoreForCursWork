// Страница для написании логики маршрутизации по сайту
import React, { useContext } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom' // Switch - оборачивание динамический маршрутов
import { Context } from '../index.js';
                                                          // Route - маршрутизация
                                                          // Redirect - перенаправление
import { authRouter, publicRouter } from '../router';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {

  const {user} = useContext(Context);

  console.log(user)

  return (
      <Routes>

        {user.isAuth && authRouter.map(({ path, Component }) =>
          <Route key={path} path={path} exact element={<Component/>} /> // настройка пути с последующей маршрутизацией и валидацией на авторизированного пользователя
                                                                       // (ключ нужен для того, чтобы показать, что все пути уникальны)
        )}

        {publicRouter.map(({ path, Component }) =>
          <Route key={path} path={path} exact element={<Component/>} /> // настройка пути с последующей маршрутизацией без валидацией на авторизированного пользователя
                                                                       // (ключ нужен для того, чтобы показать, что все пути уникальны)
        )}

        <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />}
    />

      </Routes>
  );

};

export default AppRouter;
