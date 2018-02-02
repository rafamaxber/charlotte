import React from 'react';
import styled from 'styled-components';

// TODO: Implement hamburguer menu for mobile

const LinkTexts = [
  { 
    text: 'The Queen city',
    link: '#',
    status: true,
  },
  {
    text: 'My Reservations',
    link: '#',
    status: false,
  },
  {
    text: 'Guide',
    link: '#',
    status: false,
  },
];

const Header = styled.header`
  @media (min-width: 570px) {
    width: 100%;
    max-width: 329px;
    height: 23px;
    justify-content: space-between;
    display: flex;
    left: 79px;
    top: 30px;
  }
  display: none;
  position: absolute;
`;

const StyledLink = styled.a`
  font-family: 'Heebo', sans-serif;
  position: relative;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 15px;
  text-align: center;
  color: #FFFFFF;
  transition: 0.3s ease;
  cursor: ${ props => props.active ? 'default' : 'pointer' };;
  text-shadow: ${ props => props.active ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none' };
  &:after {
    content: "";
    display: block;
    height: 2px;
    background-color: #fff;
    bottom: -4px;
    position: absolute;
    left: 0;
    opacity: 0;
    width: 0;
    transition: .3s cubic-bezier(0.63, 0.23, 1, 1);
  }
  &:hover:after {
    width: 100% ;
    opacity: 1;
  }
`;

export default () => (
  <Header>
    {
      LinkTexts.map(item => (
        <StyledLink to={item.link} key={item.text} active={item.status}>
          { item.text }
        </StyledLink>
      ))
    }
  </Header>
);
