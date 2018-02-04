import React from 'react';
import styled from 'styled-components';

const colorsForButton = {
  default: "#F98100",
  info: "#79BD1A",
}

const Button = styled.a`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  max-width: 200px;
  background-color: #FFF;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => colorsForButton[props.typeBtn || 'default']};
  border-radius: 25px;
  padding: 12px 43px;
  text-align: center;
  display: inline-block;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  color: ${props => colorsForButton[props.typeBtn || 'default']};
  transition: .3s ease;
  &:hover, &:focus {
    background-color:${props => colorsForButton[props.typeBtn || 'default']};
    color: #fff;
  }
`;

const ButtonSmall = Button.extend`
  font-size: 13px;
  border-width: 1px;
  padding: 10px 24.5px;
`;

export default ({ typeBtn, text, children, size, action, href }) => {
  if (size === 'small') {
    return (
      <ButtonSmall typeBtn={typeBtn} onClick={action}>
        {children}
      </ButtonSmall>
    );
  }
  return (
    <Button typeBtn={typeBtn}>
      {children}
    </Button>
  );
};
