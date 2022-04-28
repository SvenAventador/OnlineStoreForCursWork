import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap";
import { createBrand } from '../../API/deviceAPI';

const CreateBrand = ({ show, onHide }) => {

  const [value, setValue] = useState('')

  const addBrand = () => {

    createBrand({ name: value }).then(data => {
      setValue('')
      onHide()
    })

  }


  return (

    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form>
          <Form.Control placeholder={'Введите название бренда'} value={value} onChange={e => setValue(e.target.value)} />
        </Form>

      </Modal.Body>
      <Modal.Footer>

        <Button variant="outline-success" onClick={addBrand}>Добавить бренд</Button>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>

      </Modal.Footer>
    </Modal>
  );

};

export default CreateBrand;