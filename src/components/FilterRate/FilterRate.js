import React, { Component } from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';
import starFullImage from '../../assets/star-filled.svg';
import starEmptyImage from '../../assets/star-outline.svg';

const WrapperFilter = styled.div`
  max-width: 300px;
  border-top: 1px solid #d9d9d9;
  margin-top: 27px;
  padding-top: 15px;
`;

const StarFull = styled.img.attrs({
  src: starFullImage,
})`
  width: 26px;
  margin-right: 4px;
`;

const StarEmpty = StarFull.extend.attrs({
  src: starEmptyImage,
})``;

const TextSmall = styled.div`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12.8px;
  color: #B5B5B5;
  margin-bottom: 15px;
`;

const FilterRate = styled.div``;

export default class WrapperFilterRate extends Component {

  render() {
    return(
      <WrapperFilter>
        <FilterRate>
          <TextSmall>
            Stars
          </TextSmall>
          <Rating
            onChange={this.props.updateFilterRate.bind(this)}
            emptySymbol={<StarEmpty />}
            fullSymbol={<StarFull />}
            initialRating={this.props.updatedRate}
          />
        </FilterRate>
      </WrapperFilter>
    );
  }
}
