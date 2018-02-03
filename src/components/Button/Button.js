import React from 'react';
import styled from 'styled-components';

const colorsForButton = {
  default: "#F98100",
  level2: "#79BD1A",
}

const Button = styled.a.attrs({
  borderColor: props => colorsForButton[props.typeBtn],
  fontColor: props => colorsForButton[props.typeBtn],
})`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  max-width: 180px;
  width: 100%;
  height: 50px;
  background-color: #FFF;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.borderColor};
  border-radius: 25px;
  padding: 14px;
  text-align: center;
  display: inline-block;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: ${props => props.borderColor};
  transition: .3s ease;
  &:hover, &:focus {
    background-color:${props => props.borderColor};
    color: #fff;
  }
`;

export default ({ typeBtn, text }) => (
  <Button href="#" typeBtn={typeBtn}>
    {text || 'Search hotels'}
  </Button>
);
