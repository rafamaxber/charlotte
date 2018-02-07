import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding-top: 30px;
  @media (min-width: 570px) {
    padding-top: 60px;
  }
`;

const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  letter-spacing: 2.5px;
  color: #000000;
  display: block;
  font-size: 17px;
  padding: 0 20px;
  @media (min-width: 570px) {
    padding: 0 0 0 0;
    font-size: 22px;
  }
`;

const Message = Title.extend`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
`;

export default ({ children }) => (
  <Box>
    <Title>
      { children }
    </Title>
  </Box>
)

export const BoxMessage = ({ children }) => (
  <Box>
    <Message>
      { children }
    </Message>
  </Box>
)
