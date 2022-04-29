import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdbreact';


const FooterBar = () =>
{
  return (
    <MDBFooter className='fixed-bottom bg-dark text-center text-white'>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright,
        <a className='text-white' href='https://vk.com/sanya198olegovich' style={{textDecoration: 'none'}}>   Alex Shumilkin</a>
      </div>

    </MDBFooter>
  );
}

export default FooterBar

