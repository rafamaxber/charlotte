import React, { Component } from 'react';
import styled from 'styled-components';
import starEmpty from '../../assets/star-outline.svg';
import starFull from '../../assets/star-filled.svg';

const WrapperFilter = styled.div`
  max-width: 300px;
`;
const FilterTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 22px;
  letter-spacing: 2.5px;
  color: #000000;
  margin-bottom: 39px;
`;
const TextSmall = styled.div`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12.8px;
  color: #B5B5B5;
  margin-bottom: 20px;
`;
const StartImg = styled.img`
  width: 60px;
`;
const FilterRate = styled.div``;

export default class WrapperFilterRate extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      min: 0,
      max: 5,
      default: 3,
      selected: 4,
    }
  }

  render() {
    let Stars;
    for (let i = 0; i < this.state.max; i++) {
      if (this.state.selected > i) {
        Stars += <StartImg src={starFull} />;
      } else {
        Stars += <StartImg src={starEmpty} />;
      }
      console.log(this.state.max);

    }

    return(
      <WrapperFilter>
        <FilterRate>
          <TextSmall>
            Stars
          </TextSmall>
          <Stars></Stars>
        </FilterRate>
      </WrapperFilter>
    );
  }
}
