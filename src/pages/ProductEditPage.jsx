import React from 'react';
import BreadCrumb from "../components/Breadcrumbs";
import Container from "../components/Container";
import ProductEditCard from '../components/ProductEditCard ';
const ProductEditPage = () => {
  return (
    <section>
      <Container className="text-slate-300">
        <BreadCrumb
          currentPageTitle={"Edit Product"}
          links={[{ title: "Product Module", path: "/product" }]}
        />
        <ProductEditCard/>
      </Container>
    </section>
  );
}

export default ProductEditPage;
