import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal"
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { Context } from '../../index';
import { createDevice, fetchBrand, fetchDevice, fetchType } from '../../API/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {

  const { device } = useContext(Context)
  const [info, setInfo] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)

  useEffect(() => {

    fetchType().then(data => device.setTypes(data))
    fetchBrand().then(data => device.setBrands(data))
    fetchDevice().then(data => device.setDevices(data.rows))

  }, [])

  const addInfo = () => {

    setInfo([...info, { title: '', description: '', number: Date.now() }])

  }

  const removeInfo = (number) => {

    setInfo(info.filter(i => i.number !== number))

  }

  const changeInfo = (key, value, number) => {

    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))

  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('typeId', device.selectedType.id)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide())

  }

  return (

    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form>

          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Menu>
              {device.types.map(type =>

                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>

              )}
            </Dropdown.Menu>
            <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
          </Dropdown>

          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>

                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>

              )}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control placeholder="Введите название устройства" className='mt-3' value={name} onChange={e => setName(e.target.value)} />
          <Form.Control placeholder="Введите стоимость устройства устройства" type='number' className='mt-3' value={price} onChange={e => setPrice(Number(e.target.value))} />
          <Form.Control type='file' className='mt-3' onChange={selectFile} />
          <hr />
          <Button variant={'outline-dark'} onClick={addInfo}>Добавить новую характеристику</Button>
          {
            info.map(i =>

              <Row className='mt-4' key={i.number}>

                <Col md={4}>
                  <Form.Control value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} placeholder='Введите название характеристики' />
                </Col>

                <Col md={4}>
                  <Form.Control value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} placeholder='Введите описание характеристики' />
                </Col>

                <Col md={4}>
                  <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Удалить характеристику</Button>
                </Col>

              </Row>

            )
          }


        </Form>

      </Modal.Body>
      <Modal.Footer>

        <Button variant="outline-success" onClick={addDevice}>Добавить устройство</Button>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>

      </Modal.Footer>
    </Modal>
  );

});

export default CreateDevice;
