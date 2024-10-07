import React from 'react';
import BreadCrumb from '../components/Breadcrumbs';
import VoucherList from '../components/VoucherList';
import Container from '../components/Container';

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Voucher Module"} />
        <VoucherList/>
      </Container>
    
    </section>
  );
}

export default VoucherPage;
