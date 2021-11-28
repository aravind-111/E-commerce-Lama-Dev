import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  width: 80vh;
  position: relative;
  margin-right: 10px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
