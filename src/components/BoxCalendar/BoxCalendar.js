import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Calendar from '../Calendar/Calendar';
import Button from '../Button/Button';
import BoxTitle from '../BoxTitle/BoxTitle';

const Box = styled.div`
  width: 838px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px -40px 46px rgba(0, 0, 0, 0.332484);
  border-radius: 7px;
  position: relative;
  padding-right: 60px;
  padding-left: 60px;
`;

const BoxDate = styled.div`

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
  font-size: 22px;
  text-tranform: uppercase;
`;

const BoxDateValue = Text.extend`
  font-size: 20px;
  letter-spacing: 1.36364px;
  color: #B5B5B5;
`;
const WrapperBoxDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const WrapperBoxCalendar = styled.div`
  position: relative;
  z-index: 10;
`;
const WrapperBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
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
