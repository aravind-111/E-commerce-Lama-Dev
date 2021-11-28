import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px 20px;
  margin-right: 20px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopButton = styled.button`
  padding: 15px 20px;
  border: ${(props) => props.type === "filled" && "none"};
  background: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
  cursor: pointer;
`;

const TopTexts = styled.div`
  display: flex;
`;

const TopText = styled.div`
  margin-right: 40px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Info = styled.div`
  flex: 3;
  /* background: blue; */
`;

const Products = styled.div`
  display: flex;
  /* margin-top: 10px; */
`;

const ProductDetails = styled.div`
  flex: 3;
  /* background: green; */
  display: flex;
`;

const Image = styled.img`
  width: 13.2rem;
  height: 13.2rem;
`;

const ProductInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  font-size: 1.2rem;
`;

const ProductName = styled.div``;

const ProductId = styled.div``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  cursor: pointer;
`;

const ProductSize = styled.div``;

const PriceDetails = styled.div`
  flex: 1;
  /* padding: 5rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  /* background: red; */
`;

const ProductQty = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.5rem;
  align-items: center;
`;

const Qty = styled.div``;

const ProductPrice = styled.div`
  font-size: 2rem;
`;

const Hr = styled.hr`
  background: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  padding: 10px;
  border: 0.5px solid black;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SummaryTitle = styled.div`
  font-size: 30px;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.type === "total" ? "1.5rem" : "1rem")};
  font-weight: ${(props) => props.type === "total" && "bold"};
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;

const Button = styled.button`
  padding: 7px 5px;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Wish List(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Products>
              <ProductDetails>
                <Image
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <ProductInfo>
                  <ProductName>
                    <b>Product : </b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID : </b>97563409
                  </ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize>
                    <b>Size : </b> 37.5
                  </ProductSize>
                </ProductInfo>
              </ProductDetails>
              <PriceDetails>
                <ProductQty>
                  <Add style={{ cursor: "pointer" }} />
                  <Qty>2</Qty>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductQty>
                <ProductPrice>$ 60</ProductPrice>
              </PriceDetails>
            </Products>
            <Hr />
            <Products>
              <ProductDetails>
                <Image
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt=""
                />
                <ProductInfo>
                  <ProductName>
                    <b>Product : </b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID : </b>938137182
                  </ProductId>
                  <ProductColor color="gray"></ProductColor>
                  <ProductSize>
                    <b>Size : </b> M
                  </ProductSize>
                </ProductInfo>
              </ProductDetails>
              <PriceDetails>
                <ProductQty>
                  <Add style={{ cursor: "pointer" }} />
                  <Qty>2</Qty>
                  <Remove style={{ cursor: "pointer" }} />
                </ProductQty>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetails>
            </Products>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>PLACE YOUR BUTTON</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
