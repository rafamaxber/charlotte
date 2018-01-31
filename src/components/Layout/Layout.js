import React from 'react';
import styled from 'styled-components';

const MainPage = styled.main`
  position: relative;
  max-width: 1440px;
  width: 100%;
  min-height: 600px;
  margin: 0 auto;
`;

export default ({ children }) => (
  <MainPage>
    { children }
  </MainPage>
);