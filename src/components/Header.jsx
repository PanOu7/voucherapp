import React from 'react';
import  Container  from './Container';

const Header = () => {
  return (
    <header className='mb-5'>
      <Container>
        <h1 className="text-xl font-bold text-sky-700 ">Voucher App</h1>
        <p className="text-md text-emerald-900">MMS Software</p>
      </Container>
    </header>
  );
}

export default Header;
