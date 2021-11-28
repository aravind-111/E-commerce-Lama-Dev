import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin: 20px;
  display: flex;
`;

const ImgContainer = styled.div`
  width: 80vh;
  height: 100vh;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.div`
  font-size: 50px;
  margin-bottom: 30px;
`;

const Desc = styled.div``;

const Price = styled.div`
  font-size: 50px;
  margin-top: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;

const FilterColor = styled.div`
  background: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  margin-top: 50px;
  display: flex;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  gap: 20px;
`;

const Amount = styled.div`
  font-size: 20px;
  width: 30px;
  height: 30px;
  border: 0.5px solid black;
  border-radius: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 15px;
  background-color: white;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImgContainer>
          <Image
            src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/10/21/0293a78c-3c62-41d4-bc6b-358e1939bfef1571633734139-1.jpg"
            alt=""
          />
        </ImgContainer>
        <InfoContainer>
          <Title>Super Outfit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ratione sint harum blanditiis explicabo totam quia quaerat quam
            alias. Eos, eaque quidem officiis dignissimos dolorem ab sapiente
            molestiae reprehenderit suscipit.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color : </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size : </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
