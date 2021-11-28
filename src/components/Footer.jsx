import {
  Facebook,
  FmdGood,
  Instagram,
  LocalPhone,
  MailOutline,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
  ${mobile({ marginBottom: "20px" })}
`;
const Logo = styled.h1`
  /* font-size: 40px; */
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  margin-right: 40px;
`;
const SocialContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const SocialIcon = styled.div`
  margin-right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #${(props) => props.color};
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 40px;
  ${mobile({
    marginBottom: (props) => (props.bottom === "bottom" ? "10px" : "40px"),
  })};
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Payment = styled.img`
  margin-top: 10px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PUSHCART.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          consequuntur at aspernatur explicabo earum deleniti eos, omnis, enim
          laudantium quo, consectetur nulla molestias consequatur voluptas
          cumque quod in fuga dolore.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Women Fashion</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title bottom="bottom">Contact</Title>
        <ContactItem>
          <FmdGood style={{ marginRight: "10px" }} />
          622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </Right>
    </Container>
  );
};

export default Footer;
