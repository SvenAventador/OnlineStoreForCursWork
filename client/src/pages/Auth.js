// страница для регистрации

import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'; // использование хуков для получения настоящей страницы нахождения
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)

  return (

    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>

      <Card stye={{ width: 600 }} className="p-5">
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>

          <Form.Control
            className='mt-3'
            placeholder='Введите Ваш email...'
          />

          <Form.Control
            className='mt-3'
            placeholder='Введите Ваш пароль...'
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

            <Button variant={'outline-success'}>{isLogin ? 'Войти' : 'Регистрация'}</Button>

          </Row>

        </Form>
      </Card>

    </Container>

  );

};

export default Auth;
