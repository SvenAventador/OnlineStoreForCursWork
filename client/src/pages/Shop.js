// Основная страница, где будут карточки с товарами и постраничный выод и усе такое

import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchBrand, fetchDevice, fetchType } from '../API/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {

  const { device } = useContext(Context)

  useEffect(() => {
    fetchType().then(data => device.setTypes(data))
    fetchBrand().then(data => device.setBrands(data))
    fetchDevice(null, null, 1, 8).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, 8).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand,])

  return (
    <div data-testid="Shop">
      <Container>
        <Row className='mt-2'>

          <Col md={3}>
            <TypeBar />
          </Col>

          <Col md={9}>
            <BrandBar />
            <DeviceList />
            <Pages />
          </Col>

        </Row>

      </Container>
    </div>
  );

});


export default Shop;
