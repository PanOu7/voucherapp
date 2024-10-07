import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/Breadcrumbs";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Product Module"} />
        <ProductList />
      </Container>
    </section>
  );
};

export default ProductPage;
