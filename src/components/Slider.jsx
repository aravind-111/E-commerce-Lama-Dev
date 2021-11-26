import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff0f0;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${(props) => props.slideIndex}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  background: transparent;
  cursor: pointer;
`;

const Slider = () => {
  console.log(sliderItems);
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "right") {
      if (slideIndex > -200) {
        setSlideIndex(slideIndex - 100);
      } else {
        setSlideIndex(0);
      }
    } else {
      if (slideIndex < 0) {
        setSlideIndex(100 + slideIndex);
      } else {
        setSlideIndex(-200);
      }
    }
  };
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        {sliderItems.map((data) => {
          return (
            <Wrapper slideIndex={slideIndex} key={data.id}>
              <Slide bg={data.bg}>
                <ImgContainer>
                  <Image src={data.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{data.title}</Title>
                  <Desc>{data.desc}</Desc>
                  <Button>Shop Now</Button>
                </InfoContainer>
              </Slide>
            </Wrapper>
          );
        })}

        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
