import React from 'react';
import styled from 'styled-components';
import Calendar from '../Calendar/Calendar';

const Box = styled.div`
  width: 838px;
  height: 455px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px -40px 46px rgba(0, 0, 0, 0.332484);
  border-radius: 7px;
  position: relative;
  padding: 60px 60px 0 60px;
`;

const BoxTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 22px;
  text-align: center;
  letter-spacing: 2.5px;
  color: #000000;
  display: block;
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

export default () => (
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
            {/* Choose a date */}
            August <strong>13</strong>, 2017
          </BoxDateValue>
        </BoxDate>

        <BoxDate>
          <BoxDateTitle>
            CHECK-OUT
          </BoxDateTitle>
          <BoxDateValue>
              Choose a date
          </BoxDateValue>
        </BoxDate>

      </WrapperBoxDate>
      
      <WrapperBoxCalendar>
        <Calendar></Calendar>
      </WrapperBoxCalendar>
    
    </WrapperBox>

  </Box>
);
