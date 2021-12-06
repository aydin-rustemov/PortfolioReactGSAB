// This is SvgBlock component, It will render svgs like in the services section.
import React from "react";
import styled from "styled-components";


const RightBlock = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:40%;
position:relative;

@media only Screen and(max-width:48em){
  display:none;
  
}

`;
const SvgBlock = ({svg}) => {
  const SvgIcon = require(`../../assets/${svg}`).default;
  return (
    <RightBlock id="svgBlock">
      <img src={SvgIcon} alt="Services" />
    </RightBlock>
  );
};

export default SvgBlock;
