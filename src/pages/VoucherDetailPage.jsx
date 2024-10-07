import React from 'react';
import Container from '../components/Container';
import BreadCrumb from '../components/Breadcrumbs';
import VoucherDetailCard from '../components/VoucherDetailCard';

const VoucherDetailPage = () => {
  return (
    <section>
      <Container className="text-slate-300">
        <BreadCrumb
          currentPageTitle={"Voucher Detail"}
          links={[{ title: "Voucher Module", path: "/voucher" }]}
        />
     <VoucherDetailCard/>
      </Container>
    </section>
  );
}

export default VoucherDetailPage;


