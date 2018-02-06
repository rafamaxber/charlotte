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

export default class LayoutWrapperFilters extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth <= 570,
      showMobile: false,
    }
  }

  toogleFiltersWhenMobile() {
    if (this.state.isMobile) {
      this.setState({ showMobile: !this.state.showMobile });
    }
  }

  render() {
    return(
      <WrapperFilters>
        <FilterTitle onClick={() => this.toogleFiltersWhenMobile()}>
          Filters
        </FilterTitle>
        {
          this.state.isMobile ?
            <WrapperFilterBoxMobile> {this.state.showMobile && this.props.children } </WrapperFilterBoxMobile> :
          <WrapperFilterBox> {this.props.children }</WrapperFilterBox>
        }
      </WrapperFilters >
    );
  }
};
