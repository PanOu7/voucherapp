import React from "react";
import BreadCrumb from "../components/Breadcrumbs";
import Container from "../components/Container";
import VoucherInfo from "../components/VoucherInfo";
import SaleForm from "../components/SaleForm";


const SalePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Sale Module"} />
        <VoucherInfo/>
      </Container>
    </section>
  );
};

export default SalePage;
