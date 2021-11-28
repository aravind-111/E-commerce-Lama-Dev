import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  width: 80vw;
  position: relative;
  margin-right: 10px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "60vh", width: "100vw" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ marginLeft: "10%" })}
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;

const ComponentItem = ({ data }) => {
  console.log("componentitem");
  return (
    <Container>
      <Image src={data.img} />
      <Info>
        <Title>{data.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default ComponentItem;
