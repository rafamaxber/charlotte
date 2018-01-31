import React from 'react';
import styled from 'styled-components';
import banner from '../../assets/hero.jpg';

const Hero = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  left: 0px;
  top: 0px;
  background-position: top center;
  background-repeat: no-repeat;
  background-image: url(${banner});
  background-size: cover;
  z-index: -1;
  
  @media (min-width: 570px) {
    height: 600px;
    background-size: 100%;
    background: palevioletred;
  } 
`;

export default () => (
  <Hero>
    
  </Hero>
);