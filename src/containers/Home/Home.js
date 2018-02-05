import React from 'react';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout, {
  LayoutContainerWrapperListHotels,
  LayoutWrapperListHotels,
  LayoutWrapperFilters,
  LayoutWrapperCards,
} from '../../components/Layout/Layout';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import Hero from '../../components/Hero/Hero';
import BoxCalendar from '../../components/BoxCalendar/BoxCalendar';
import Calendar from '../../components/Calendar/Calendar';
import BoxTitle, { BoxMessage } from '../../components/BoxTitle/BoxTitle';
import FilterRange from '../../components/FilterRange/FilterRange';
import FilterRate from '../../components/FilterRate/FilterRate';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

import { 
  updateFilterPrice,
  updateRangeDate,
  updateFilterRate,
  fetchHotels,
} from '../../modules/hotels';

const formatDate = (dateIso) => {
  if (dateIso) {
    const utcDate = dateIso.toUTCString();
    return(
      <span>
        {moment(utcDate).format("MMMM")}
        <b> {moment(utcDate).format("DD")}</b>
      </span>
    );
  }
}

const HomePage = (props) => {
  console.log('HomePage ', props.errorMessage);
  return(
    <Layout>
      <HeaderNavigation></HeaderNavigation>
      <Hero></Hero>
      <BoxCalendar
        startDate={props.startDate}
        endDate={props.endDate}
        fetchHotels={props.fetchHotels}
      >
        <Calendar
          updateRangeDate={props.updateRangeDate}
          startDate={props.startDate}
          endDate={props.endDate}
        ></Calendar>
      </BoxCalendar>
      {
        props.hotels &&
        <LayoutContainerWrapperListHotels >
          <BoxTitle>
            Best choices between {formatDate(props.startDate)} and {formatDate(props.endDate)}
          </BoxTitle>
            
          <LayoutWrapperListHotels>
            <LayoutWrapperFilters>
              <FilterRange
                updateFilterPrice={props.updateFilterPrice}
                afterupdateFilterPrice = {
                  props.fetchHotels
                }
              ></FilterRange>
              <FilterRate
                updateFilterRate={props.updateFilterRate}
                updatedRate={props.rate}
                afterUpdatedRate={
                  props.fetchHotels
                }
              ></FilterRate>
            </LayoutWrapperFilters>
            <LayoutWrapperCards>
              {
                props.hotels.map(item => (
                  <Card
                    key={item.name}
                    image={item.image}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    price_history={item.price_history}
                    rate={item.rate}
                  ></Card>
                ))
              }
              {
                (props.hotels.length === 0) &&
                <BoxMessage>
                  Sorry, we did not find the hotel you were looking for :(
                </BoxMessage>
              }
            </LayoutWrapperCards>
          </LayoutWrapperListHotels>
        </LayoutContainerWrapperListHotels>
      }
      <Footer></Footer>
    </Layout>
  );
};

const mapStateToProps = state => ({
  minPrice: state.hotels.minPrice,
  maxPrice: state.hotels.maxPrice,
  rate: state.hotels.rate,
  startDate: state.hotels.startDate,
  endDate: state.hotels.endDate,
  hotels: state.hotels.hotels,
  errorMessage: state.hotels.errorMessage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateFilterPrice,
  updateRangeDate,
  updateFilterRate,
  fetchHotels,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
