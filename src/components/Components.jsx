import React from "react";
import { categories } from "../data";
import ComponentItem from "./ComponentItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
