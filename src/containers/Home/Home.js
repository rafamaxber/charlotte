import React from 'react';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoadableWrapper from '../../components/Loading/Loadable';
import Loading from '../../components/Loading/Loading';
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
import Hero from '../../components/Hero/Hero';
import BoxTitle, { BoxMessage } from '../../components/BoxTitle/BoxTitle';
import BoxCalendar from '../../components/BoxCalendar/BoxCalendar';
import Calendar from '../../components/Calendar/Calendar';

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
        <LayoutContainerWrapperListHotels>
          {
            props.endDate ?
              <BoxTitle>
                Best choices between {formatDate(props.startDate)} and {formatDate(props.endDate)}
              </BoxTitle> : ''
          }
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
              loading={props.hotelsLoading}>
              {
              props.hotelsLoading ?
                <Loading></Loading> :
                <div>
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
                </div>                  
              }
              {
                (props.hotels.length === 0 && !props.hotelsLoading) &&
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
