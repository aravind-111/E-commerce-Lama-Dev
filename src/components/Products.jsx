import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((data) => (
        <Product data={data} key={data.id} />
      ))}
    </Container>
  );
};

export default Products;
