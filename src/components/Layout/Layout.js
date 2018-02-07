import React from 'react';
import styled from 'styled-components';

const MainPage = styled.main`
  position: relative;
  width: 100%;
  min-height: 600px;
  margin: 0 auto;
  z-index: 0;
`;
const WrapperListHotels = styled.div`
  margin-top: 60px;  
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 7px;
  @media (min-width: 570px) {
    padding: 0 30px;
  }
`;
const ContainerWrapperListHotels = MainPage.extend`
  
`;
const WrapperCards = styled.div`
  width: 100%;
  @media (min-width: 570px) {  
    width: 75%;
  }
`;

export default ({ children }) => (
  <MainPage>
    { children }
  </MainPage>
);

export const LayoutWrapperListHotels = ({ children }) => (
  <WrapperListHotels>
    {children}
  </WrapperListHotels>
);

export const LayoutWrapperCards = ({ children, loading }) => (
  <WrapperCards>
    { children }
  </WrapperCards>
);

export const LayoutContainerWrapperListHotels = ({ children }) => (
  <ContainerWrapperListHotels>
    {children}
  </ContainerWrapperListHotels>
);

