// страница для регистрации

import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'; // использование хуков для получения настоящей страницы нахождения
import { login, registration } from '../API/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'
import { Context } from '../index.js';

const Auth = observer(() => {

  const { user } = useContext(Context)
  const location = useLocation()
  const history = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const regAuth = async () => {

    try {
      let data;

      if (isLogin) {
        data = await login(email, password)
      }

      else {
        data = await registration(email, password)
      }

      user.setUser(user)
      user.setIsAuth(true)
      history(SHOP_ROUTE)

    } catch (e) {
      alert(e.response.data.message)
    }


  }

  return (
    <div data-testid="auth">
      <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>

        <Card stye={{ width: 600 }} className="p-5">
          <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className='d-flex flex-column'>

            <Form.Control
              id="login"
              className='mt-3'
              placeholder='Введите Ваш email...'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Form.Control
              id="password"
              className='mt-3'
              placeholder='Введите Ваш пароль...'
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
            />

            <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>

              {isLogin ?
                <div>
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
                :
                <div>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              }

              <Button variant={'outline-success'} onClick={regAuth}>{isLogin ? 'Войти' : 'Регистрация'}</Button>

            </Row>

          </Form>
        </Card>

      </Container>
    </div>

  );

});

export default Auth;
