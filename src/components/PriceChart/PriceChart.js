import React from 'react';
import styled from 'styled-components';
import BackButtonImage from '../../assets/back-description.svg';

const WrapperChart = styled.div`
  max-width: 600px;
  width: 95%;
  padding: 10px 10px 0 10px;
  margin-top: 20px;
  @media (min-width: 570px) {
    margin-top: 0px;
    padding: 0 0 0 0;
    min-height: 180px;
  }
`;
const StageChart = styled.div`
  max-width: 500px;
  width: 100%;
`;
const Title = styled.div`
  font-family: 'Heebo', sans-serif; 
  font-style: normal;
  font-weight: bold;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 1.81818px;
  display: inline-block;
  width: 49%;
  text-transform: uppercase;
  color: #F98100;
  vertical-align: middle;
`;
const BackButton = styled.div`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
  width: 49%;
  font-family: 'Heebo', sans-serif; 
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 1.36364px;
  color: #555555;
`;
const BackButtonIcon = styled.img.attrs({
  src: BackButtonImage
})`
  width: 26px;
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
`;
const Chart = styled.div`
  border-bottom: 2px solid #d9d9d9;
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (min-width: 570px) {
    min-height: 180px;
  }
`;
const Bar = styled.div`
  width: 27px;
  height: ${props => props.size}px;
  position: relative;
  bottom: 0;
  transition: .3s ease;
  background: linear-gradient(0deg, rgba(238, 111, 72, 0.6) 0%, rgba(249, 129, 0, 0.6) 100%);
  &:hover,
  &:focus,
  &:active {
    transition: .3s ease;
    background: linear-gradient(0deg, #EE6F48 0%, #F98100 100%);
  }
  &:hover .chart-tooltip {
    visibility: visible!important;
    opacity: 1!important;
  }
`;
const Tooltip = styled.div`
  font-family: 'Heebo', sans-serif; 
  visibility: hidden;
  font-size: 15px;
  position: absolute;
  background-color: #484848;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  z-index: 1;
  width: 70px;
  top: -35px;
  left: -21px;
  opacity: 0;
  transition: opacity .6s;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;
const ChartLabel = styled.div`
  font-family: 'Heebo', sans-serif; 
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12.8px;
  text-align: center;
  letter-spacing: 1.45455px;
  color: #B5B5B5;
  bottom: -25px;
  position: absolute;
`;

export default ({ history, closeChart }) => (
  <WrapperChart>
    <StageChart>
      <Title>Price history for 2017</Title>
      <BackButton onClick={closeChart}>
        <BackButtonIcon></BackButtonIcon>
        Back to description
      </BackButton>
      <Chart>
        {
          history.map(item => (
            <Bar size={item.value / 5} key={item.month}>
              <Tooltip className="chart-tooltip">${item.value}</Tooltip>
              <ChartLabel>{item.month}</ChartLabel>
            </Bar>
          ))
        }
      </Chart>
    </StageChart>
  </WrapperChart>
);
