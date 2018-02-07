import React, { PureComponent } from 'react';
import styled from 'styled-components';

const FilterTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  letter-spacing: 2.5px;
  color: #000000;
  font-size: 18px;
  @media (min-width: 570px) {
    font-size: 22px;
  }
`;
const WrapperFilters = styled.div`
  width: 100%;
  @media (min-width: 570px) {
    width: 300px;
  }
  @media (max-width: 570px) {
    width: 96%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    padding: 20px;
    left: 0;
    right: 0;
    margin: auto;
    height: auto;
    box-shadow: 0px 2px 15px 5px #ddd;
    z-index: 10;
  }
`;
const WrapperFilterBox = styled.div`

`; 
const WrapperFilterBoxMobile = styled.div`
  
`; 


function setMobileComponent(showMobile, children, toogleFiltersWhenMobile) {
  return (
    <WrapperFilters>
      <FilterTitle onClick={() => toogleFiltersWhenMobile()}>
        Filter by
      </FilterTitle>
      <WrapperFilterBoxMobile> {showMobile && children} </WrapperFilterBoxMobile>
    </WrapperFilters >
  );
}

function setDesktopComponent(children) {
  return (
    <WrapperFilters>
      <FilterTitle>
        Filters
      </FilterTitle>
      <WrapperFilterBox>{children}</WrapperFilterBox>
    </WrapperFilters >
  );
}

export default class LayoutWrapperFilters extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth <= 570,
      showMobile: false,
    }
  }

  toogleFiltersWhenMobile() {
    this.setState({ showMobile: !this.state.showMobile });
  }

  render() {
    if (this.state.isMobile) {
      return setMobileComponent(this.state.showMobile, this.props.children, this.toogleFiltersWhenMobile.bind(this));
    } 
    return setDesktopComponent(this.props.children);
  }
};
