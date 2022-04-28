import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row, Card } from "react-bootstrap";

//TODO ПОНЯТЬ ПОЧЕМУ BRANDBAR РАБОТАЕТ НЕ ТАК.
const BrandBar = observer(() => {

  const { device } = useContext(Context)

  return (

    <Row className="d-flex">

      {device.brands.map(brand =>

        <Card key={brand.id}  className='p-3' style={{cursor: 'pointer', width: '20%' }} onClick={() => device.setSelectedBrand(brand)} border={brand.id === device.selectedBrand.id ? 'danger' : 'black'}>
          {brand.name}
        </Card>

      )}

    </Row>

  );

});

export default BrandBar;
