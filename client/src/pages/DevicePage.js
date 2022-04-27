// Страница, где будет выводиться информация об устройстве и т.д.

import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import bigStar from '../assets/ratingStarDevicePage.png'

const DevicePage = () => {

  const device = { id: 1, name: "Apple 12 pro", price: 75000, rating: 5, img: `https://252919.selcdn.ru/shoplot/32187755.jpg` };
  const description = [

    { id: 1, title: 'Оперативная память', description: '5 гб' },
    { id: 2, title: 'Оперативная память', description: '5 гб' },
    { id: 3, title: 'Оперативная память', description: '5 гб' },
    { id: 4, title: 'Оперативная память', description: '5 гб' },
    { id: 5, title: 'Оперативная память', description: '5 гб' },

  ]

  return (

    <div>
      <Container className='mt-3'>

        <Row>
          <Col md={4}>

            <Image width={300} height={300} src={device.img} />

          </Col>

          <Col md={4}>

            <Row className="d-flex flex-column align-items-center">
              <h2>{device.name}</h2>
              <div className="mr-5 d-flex align-items-center justify-content-center" style={{ background: `url(${bigStar}) no-repeat center center`, width: 200, height: 200, backgroundSize: 'cover', fontSize: 64 }}>
                {device.rating}
              </div>
            </Row>

          </Col>

          <Col md={4}>

            <Card className='d-flex flex-column align-items-center justify-content-around' style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}>
              <h3>От {device.price} руб.</h3>
              <Button variant={'outline-success'}>Добавить в корзину</Button>
            </Card>

          </Col>
        </Row>

        <Row className='d-flex flex-column m-3'>
          <h1>Характеристики</h1>
          {description.map((info, index) =>

            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'pink', padding: 10}}>
              {info.title}:{info.description}
            </Row>

          )}
        </Row>

      </Container>
    </div>

  );

};

export default DevicePage;
