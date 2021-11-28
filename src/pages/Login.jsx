import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 30px;
  background: #fffefe;
  border-radius: 10px;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 20rem;
  height: 2rem;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 7rem;
  padding: 7px;
  color: white;
  cursor: pointer;
  background-color: teal;
  border: none;
  margin-bottom: 15px;
`;
const Link = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Log In</Title>
        <Form>
          <Input placeholder="User Name"></Input>
          <Input placeholder="Password"></Input>
          <Button>Log In</Button>
          <Link>Forgot Password</Link>
          <Link>Sign In</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
