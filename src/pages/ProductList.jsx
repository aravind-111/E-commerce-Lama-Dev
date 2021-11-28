import React from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 600;
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  padding: 20px;
  margin-right: 20px;
  font-weight: 600;
`;

const Option = styled.option``;

const Select = styled.select`
  padding: 10px;
  height: 40px;
  margin-right: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Filter</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select style={{ marginRight: "20px" }}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
