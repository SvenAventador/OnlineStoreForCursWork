// Основная страница, где будут карточки с товарами и постраничный выод и усе такое

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';

//TODO ПЕРЕДЕЛАТЬ BRANDBAR
const Shop = () => {

  return (

    <Container>
      <Row className='mt-2'>

        <Col md={3}>
          <TypeBar />
        </Col>

        <Col md={9}>
          <BrandBar />
          <DeviceList/>
        </Col>

      </Row>
    </Container>

  );

};

export default Shop;
