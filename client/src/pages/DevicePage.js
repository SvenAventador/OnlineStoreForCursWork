// Страница, где будет выводиться информация об устройстве и т.д.

import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import bigStar from '../assets/ratingStarDevicePage.png'
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../API/deviceAPI';

const DevicePage = () => {

  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams() // получение параметров строки запроса

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])

  return (

    <div>
      <Container className='mt-3'>

        <Row>
          <Col md={4}>

            <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />

          </Col>

          <Col md={4}>

            <Row >
              <h2>{device.name}</h2>
              <div className="d-flex align-items-center justify-content-center" style={{ background: `url(${bigStar}) no-repeat center center`, width: 200, height: 200, backgroundSize: 'cover', fontSize: 64 }}>
                {device.rating}
              </div>
            </Row>

          </Col>

          <Col md={4}>

            <Card className='d-flex flex-column align-items-center justify-content-around' style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}>
              <h3>От {device.price} руб.</h3>
              <Button variant={'outline-success'} onclick={alert('Поздравляем с покупкой! Спасибо, что выбрали нас!')}>Купить</Button>

            </Card>

          </Col>
        </Row>

        <Row className='d-flex flex-column m-3'>
          <h1>Характеристики</h1>
          {device.info.map((info, index) =>

            <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'pink', padding: 10 }}>
              {info.title}:{info.description}
            </Row>

          )}
        </Row>

      </Container>
    </div >

  );

};

export default DevicePage;
