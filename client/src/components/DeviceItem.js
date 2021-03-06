import React from 'react'
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import star from '../assets/ratingStar.png'
import { useNavigate } from 'react-router-dom' // хук для динамического перемещения по страницам(запоминание тех страниц, на которых были, и нужно будет вернуться)
import { DEVICE_ROUTE } from "../utils/consts"

const DeviceItem = ({ device }) => {

  const history = useNavigate();

  //TODO Создать после первого дива обращение к брендам

  return (

    <Col md={3} className='mt-3' onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>

      <Card style={{ width: 150, cursor: 'pointer' }} border={'black'}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-betweeen align-items-center">

          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={15} height={15} src={star} />
          </div>

        </div>

        <div>{device.name}</div>

      </Card>

    </Col>

  );


};

export default DeviceItem;
