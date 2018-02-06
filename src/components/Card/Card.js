import React, { Component } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Button from '../../components/Button/Button';
import StarFullImage from '../../assets/star-filled.svg';
import PriceChart from '../PriceChart/PriceChart';

const Wrapper = styled.div`
  max-width: 940px;
  min-height: 318px;
  background: #FFFFFF;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 570px) {
    padding: 35px 0;
  }
`;
const Image = styled.img`
  width: 238px;
  height: 238px;
`;
const WrapperDescription = styled.div`
  max-width: 402px;
  position: relative;
  @media (min-width: 570px) {
    &:after {
      content: "";
      width: 2px;
      height: 100%;
      right: -5%;
      top: 0;
      background-color: #D9D9D9;
      position: absolute;
      display: block;
    }
  }
`;
const Rate = styled.div`
  margin-bottom: 10px;
`;
const Star = styled.img.attrs({
  src: StarFullImage,
})`
  margin-right: 4.3px;
  width: 12.6px;
  @media (mix-width: 570px) {
    width: 15px;
  }
  
`;
const Title = styled.div`
  font-family: 'Heebo', sans-serif; 
  font-style: normal;
  font-weight: bold;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 1.81818px;
  text-transform: uppercase;
  color: #F98100;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  line-height: normal;
  font-size: 15px;
  color: #B5B5B5;
`;
const WrapperButtons = styled.div`
  margin-top: 30px;
  @media (max-width: 570px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
const WrapperPrice = styled.div`
  @media (max-width: 570px) {
    display: flex;
    display: flex;
    margin: 20px auto;
    align-items: baseline;
  }
  @media (min-width: 570px) {
    display: block;
    width: 195px;
    text-align: right;
    position: relative;
    margin-top: 5%;
  }
`;
const PriceTitle = styled.div`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 16px;
  letter-spacing: 1.81818px;
  color: #B2B0C0;
`;
const Price = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 30px;
  letter-spacing: 3.40909px;
  color: #79BD1A;
`;
const CardButton = styled.div`
  display: inline-block;
  @media (min-width: 570px) {
    margin-right: 20px;
  }
`;
const WrapperInfo = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  @media (max-width: 570px) {
    text-align: center;
  }
`;
export default class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showChart: false,
    }
  }

  render() {
    return(
      <Wrapper>
        <LazyLoad height={200}>
          <Image src={this.props.image}></Image>
        </LazyLoad>
        {
          this.state.showChart && 
          <PriceChart 
            history={this.props.price_history}
            closeChart={() => { this.setState({ showChart: false })}}
          ></PriceChart>
        }        
        {
          !this.state.showChart && 
          <WrapperInfo>
            <WrapperDescription>
              <Rate>
                {
                  Array.from(new Array(this.props.rate)).map((item, index) => <Star key={index} />)
                }
              </Rate>
              <Title>{this.props.title}</Title>
              <Description>{this.props.description}</Description>
              <WrapperButtons>
                <CardButton>
                  <Button size='small'>
                    Book now
                  </Button>
                </CardButton>
                <CardButton>
                  <Button size='small' typeBtn="info" action={() => this.setState({ showChart: true })}>
                    Price history
                  </Button>
                </CardButton>
              </WrapperButtons>
            </WrapperDescription>
            <WrapperPrice>
              <PriceTitle>
                Total
              </PriceTitle>
              <Price>
                ${this.props.price}
              </Price>
            </WrapperPrice>
          </WrapperInfo>
        }
      </Wrapper>

    );
  }
} 
