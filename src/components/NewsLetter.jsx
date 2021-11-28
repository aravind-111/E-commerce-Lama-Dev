import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background: #fcf5f5;
  /* #e4b9b9 */
  /* fcf5f5 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 10px;
`;
const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  background: white;
  justify-content: space-between;
  ${mobile({ width: "70%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely Updates from Your favorite Brand.</Desc>
      <SearchContainer>
        <Input placeholder="Enter Your Email"></Input>
        <Button>
          <Send />
        </Button>
      </SearchContainer>
    </Container>
  );
};

export default NewsLetter;
