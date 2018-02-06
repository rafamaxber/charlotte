import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Button from '../Button/Button';
import BoxTitle from '../BoxTitle/BoxTitle';

const Box = styled.div`
  width: 100%;
  max-width: 838px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px -40px 46px rgba(0, 0, 0, 0.332484);
  position: relative;
  padding-right: 20px;
  padding-left: 20px;
  @media (min-width: 570px) {
    border-radius: 7px;
    padding-right: 60px;
    padding-left: 60px;
  }
`;

const BoxDate = styled.div`
  @media (max-width: 570px) {
    width: 50%;
    border: 1px solid rgb(206, 255, 142);
    margin-bottom: 30px;
    padding: 10px 0;
  }
`;
const Text = styled.div`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  letter-spacing: 2.5px;
`
const BoxDateTitle = Text.extend`
  color: #555555;
  font-size: 16px;
  text-tranform: uppercase;
  @media (min-width: 570px) {
    font-size: 22px;
  }
`;

const BoxDateValue = Text.extend`
  font-size: 15px;
  letter-spacing: 1.36364px;
  color: #B5B5B5;
  @media (min-width: 570px) {
    font-size: 20px;
  }
`;
const WrapperBoxDate = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (min-width: 570px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
const WrapperBoxCalendar = styled.div`
  position: relative;
  z-index: 0;
`;
const WrapperBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  @media (max-width: 570px) {
    margin-top: 30px;
    flex-wrap: wrap-reverse;
  }
`;

const dateTranslate = (dateIso) => {
  if (dateIso) {
    const utcDate = dateIso.toUTCString();
    return (
      <span>
        {moment(utcDate).format("MMMM")}
        <b> {moment(utcDate).format("DD")}</b>,
        <span> {moment(utcDate).format("YYYY")} </span>
      </span>
    );
  }
  return false;
}


export default ({ children, startDate, endDate, fetchHotels}) => (
  <Box>
    <BoxTitle>
      Select the dates to stay in Charlotte
    </BoxTitle>

    <WrapperBox>
      <WrapperBoxDate>
        <BoxDate>
          <BoxDateTitle>
            CHECK-IN
          </BoxDateTitle>
          <BoxDateValue>
            { dateTranslate(startDate) || `Choose a date` } 
          </BoxDateValue>
        </BoxDate>

        <BoxDate>
          <BoxDateTitle>
            CHECK-OUT
          </BoxDateTitle>
          <BoxDateValue>
            {dateTranslate(endDate) || `Choose a date`} 
          </BoxDateValue>
        </BoxDate>

        <Button typeBtn="default" size="default" action={fetchHotels}>
          Search hotels
        </Button>

      </WrapperBoxDate>
      
      <WrapperBoxCalendar>
        {children}
      </WrapperBoxCalendar>
    
    </WrapperBox>

  </Box>
);
