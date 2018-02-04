import React, { Component } from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import './FilterRange.css';

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
const FilterRange = styled.div``;
const WrapperValue = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const FilterValue = styled.div`
  text-align: ${props => props.left ? 'left' : 'right' };
`;
const FilterValueTitle = styled.div`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  color: #B5B5B5;
  margin-bottom: 5px;
`;
const FilterValueTextPrice = styled.div`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  letter-spacing: 2.5px;
  color: rgba(249, 129, 0, 0.467816);
`;

export default class WrapperFilterRange extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      min: 100,
      max: 1000,
      minPrice: 100,
      maxPrice: 930,
    }
  }

  updateFilterValues() {
    this.props.updateFilterPrice({ minPrice: this.state.minPrice, maxPrice: this.state.maxPrice });
    return this.props.afterupdateFilterPrice();
  }

  render() {
    return(
      <WrapperFilter>
        <FilterTitle>
          Filters
        </FilterTitle>
        <FilterRange>
          <TextSmall>
            Price Range
          </TextSmall>
          <Rheostat
            min={this.state.min}
            max={this.state.max}
            onValuesUpdated={({ values }) => this.setState({ minPrice: values[0], maxPrice: values[1] })}
            onSliderDragEnd={this.updateFilterValues.bind(this)}
            values={[this.state.minPrice, this.state.maxPrice]}
          />
          <WrapperValue>
            <FilterValue left>
              <FilterValueTitle>Min</FilterValueTitle>
              <FilterValueTextPrice>
                ${this.state.minPrice}
              </FilterValueTextPrice>
            </FilterValue>

            <FilterValue right>
              <FilterValueTitle>Max</FilterValueTitle>
              <FilterValueTextPrice>
                ${this.state.maxPrice}
            </FilterValueTextPrice>
            </FilterValue>

          </WrapperValue>
        </FilterRange>
      </WrapperFilter>
    );
  }
}
