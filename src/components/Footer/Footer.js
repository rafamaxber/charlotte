import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twiterIcon from '../../assets/twitter.svg';

const Footer = styled.div`
  background: #FFFFFF;
  margin-top: 100px;
  text-align: center;
  box-shadow: 0 -10px 20px -10px rgba(0,0,0,0.13);
`;
const SmallText = styled.small`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  color: #B5B5B5;
  display: block;
  padding-bottom: 20px;
  @media (min-width: 600px) {
    padding-bottom: 40px;
  }
`;
const WrapperIcons = styled.div`
  padding: 20px;
  @media (min-width: 600px) {
    padding: 40px 0 30px;
  }
`;
const Icon = styled.a`
  display: inline-block;
  width: 34px;
  margin: 0 10px;
`;

export default () => (
  <Footer>
    <WrapperIcons>
      <Icon href="#">
        <img src={facebookIcon} alt="Facebook"/>
      </Icon>
      <Icon href="#">
        <img src={twiterIcon} alt="Twiter"/>
      </Icon>
      <Icon href="#">
        <img src={instagramIcon} alt="Instagram"/>
      </Icon>
    </WrapperIcons>
    <SmallText>
      © 2004-2018 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202
    </SmallText>
  </Footer>
);
