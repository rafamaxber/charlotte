import React from 'react';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoadableWrapper from '../../components/Loading/Loadable';
import Layout, {
  LayoutContainerWrapperListHotels,
  LayoutWrapperListHotels,
  LayoutWrapperCards,
} from '../../components/Layout/Layout';
import LayoutWrapperFilters from '../../components/LayoutWrapperFilters/LayoutWrapperFilters';
import { 
  updateFilterPrice,
  updateRangeDate,
  updateFilterRate,
  fetchHotels,
} from '../../modules/hotels';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import BoxTitle, { BoxMessage } from '../../components/BoxTitle/BoxTitle';

const Hero = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Hero"*/'../../components/Hero/Hero'),
});
const BoxCalendar = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "BoxCalendar"*/'../../components/BoxCalendar/BoxCalendar'),
});
const Calendar = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Calendar"*/'../../components/Calendar/Calendar'),
});
const FilterRange = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "FilterRange"*/'../../components/FilterRange/FilterRange'),
});
const FilterRate = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "FilterRate"*/'../../components/FilterRate/FilterRate'),
});
const Card = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Card"*/'../../components/Card/Card'),
});
const Footer = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Footer"*/'../../components/Footer/Footer'),
});

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
        console.log('\n\nstatus ===>>', props.hotelsLoading)
      }
      {
        props.hotels &&
        <LayoutContainerWrapperListHotels >
          <BoxTitle>
            Best choices between {formatDate(props.startDate)} and {formatDate(props.endDate)}
          </BoxTitle>
            
          <LayoutWrapperListHotels>
            <LayoutWrapperFilters>
              <FilterRange
                minPrice={props.minPrice}
                maxPrice={props.maxPrice}
                updateFilterPrice={props.updateFilterPrice}
                afterupdateFilterPrice = {
                  props.fetchHotels
                }
              ></FilterRange>
              <FilterRate
                updateFilterRate={props.updateFilterRate}
                updatedRate={props.rate}
                afterUpdatedRate={props.fetchHotels}
              ></FilterRate>
            </LayoutWrapperFilters>
            <LayoutWrapperCards
              loading={props.hotelsLoading}
              >
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
  hotelsLoading: state.hotels.hotelsLoading,
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
