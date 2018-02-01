import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link) `
  font-family: 'Heebo', sans-serif;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 15px;
  text-align: center;
  color: #FFFFFF;
  transition: 0.3s ease;
  text-shadow: ${ props => props.active ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none' };
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Header>
    {
      LinkTexts.map(item => (
        <StyledLink to={item.link} active={item.status}>
          { item.text }
        </StyledLink>
      ))
    }
  </Header>
);
