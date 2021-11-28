import React from "react";
import { categories } from "../data";
import ComponentItem from "./ComponentItem";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Components = () => {
  return (
    <Container>
      {categories.map((data) => {
        return <ComponentItem data={data} key={data.id} />;
      })}
    </Container>
  );
};

export default Components;
