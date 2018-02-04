import React from 'react';
import Layout from '../../components/Layout/Layout';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import Hero from '../../components/Hero/Hero';
import BoxCalendar from '../../components/BoxCalendar/BoxCalendar';
import BoxTitle from '../../components/BoxTitle/BoxTitle';
import FilterRange from '../../components/FilterRange/FilterRange';
import FilterRate from '../../components/FilterRate/FilterRate';
import Card from '../../components/Card/Card';

const WrapperListHotels = ({ children }) => (
  <div className="wrapperListHotels">
    {children}
  </div>
);

const WrapperFilters = ({ children }) => (
  <div className="wrapperFilters">
    {children}
  </div>
);

const HomePage = () => (
  <Layout>
    <HeaderNavigation></HeaderNavigation>
    <Hero></Hero>
    <BoxCalendar></BoxCalendar>

    <WrapperListHotels>
      <BoxTitle>
        Best choices between __date_start__ and __date_end__
      </BoxTitle>
      <WrapperFilters>
        <FilterRange></FilterRange>
        <FilterRate></FilterRate>
      </WrapperFilters>
      <Card></Card>
    </WrapperListHotels>

  </Layout>
);

export default HomePage;
