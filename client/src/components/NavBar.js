import React, { useContext } from 'react'
import { Context } from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {

  const { user } = useContext(Context)
  const history = useNavigate()

  const logOut = () => {

    user.setUser({})
    user.setIsAuth(false)
    history(LOGIN_ROUTE)

  }

  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>ElectroMagnat</NavLink>

        {user.isAuth && user.role === 'admin' ?

          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
            <Button variant={"outline-light"} onClick={() => logOut()} className='ml-2'>Выйти</Button>
          </Nav>

          :

          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Выйти</Button>
          </Nav>
        }

      </Container>
    </Navbar>

  );

});

export default NavBar;