// This is Testimonials component
import styled from "styled-components";
import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Card from "../../components/Card";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;
const Title = styled.h1`
color: #0a0b10;
display: inline-block;
font-size: calc(1rem + 1.5vw);
margin-top: 1.5rem;
position: relative;
&::before{
  content:'';
  height:1px;
  width:50%;
  position:absolute;
  left:50%;
  bottom:0;
  border-bottom:2px solid var(--purple);
  transform:translate(-50%);
}
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only Screen and (max-width:48em){
    width:90vw;
    
    .slick-slider .slick-arrow{
      display:none
    }
  }

  .slick-slider .slick-arrow:before{
    color:var(--black);
    font-size:1.5rem;
    @media only Screen and (max-width:48em){
       display:none
      }
    }

  }

  .slick-slider .slick-dots button:before{
    color:var(--black);
    font-size:1.5rem;
  }

  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return <Section>

    <Title>Few good words about me!</Title>
  <Carousal>
  <Slider {...settings}>
          <Card 
            text="Frontend
            Developer.
            I like to craft solid and scalable frontend products with great user experiences."
            name="AYDIN"
            image="avatar-1"


          />
          <Card 
            text="Frontend
            Developer.
            I like to craft solid and scalable frontend products with great user experiences."
            name="AYDIN"
            image="avatar-1"

          />
         
        </Slider>
  </Carousal>
  
  
  </Section>;
};

export default Testimonials;
