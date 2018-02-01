import React from 'react';
import styled from 'styled-components';
import banner from '../../assets/hero.jpg';
import crownwhite from '../../assets/crown.svg';

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  left: 0px;
  top: 0px;
  background-position: top center;
  background-repeat: no-repeat;
  background-image: url(${banner});
  background-size: 160%;
  z-index: -1;
  background-attachment: fixed;
  @media (min-width: 600px) {
    background-size: cover;
    height: 600px;
  } 
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70%;
  @media (min-width: 600px) {
    height: 80%;
  }
`;

const Crown = styled.img`
  width: 40px;
  display: block;
  margin-bottom: 18px;
  @media (min-width: 600px) {
    width: 54.73px;
  }
`;

const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: normal;
  letter-spacing: 2.6px;
  color: #FFFFFF;
  text-transform: uppercase;
  @media (min-width: 600px) {
    font-size: 22px;
  }
`;

const CharlotteText = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 32px;
  letter-spacing: 10.6px;
  color: #FFFFFF;
  text-transform: uppercase;
  position: relative;
  padding: 10px 16.69px 11px;
  margin: 9px 0 15px;

  &:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }
  &:before {
    content: "";
    left: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0;
    background-color: #fff;
  }
  @media (min-width: 600px) {
    font-size: 76px;
  }
`;

export default () => (
  <Hero>
    <WrapperText>
      <Crown src={crownwhite} />
      <Text>
        Welcome to
      </Text>
      <CharlotteText>
        Charlotte
      </CharlotteText>
      <Text>
        the queen city
      </Text>
    </WrapperText>
  </Hero>
);
