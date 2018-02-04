import React from 'react';
import Layout, {
  LayoutWrapperListHotels,
  LayoutWrapperFilters,
  LayoutWrapperCards,
} from '../../components/Layout/Layout';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import Hero from '../../components/Hero/Hero';
import BoxCalendar from '../../components/BoxCalendar/BoxCalendar';
import BoxTitle from '../../components/BoxTitle/BoxTitle';
import FilterRange from '../../components/FilterRange/FilterRange';
import FilterRate from '../../components/FilterRate/FilterRate';
import Card from '../../components/Card/Card';

const HomePage = () => (
  <Layout>
    <HeaderNavigation></HeaderNavigation>
    <Hero></Hero>
    <BoxCalendar></BoxCalendar>

    <BoxTitle>
      Best choices between __date_start__ and __date_end__
    </BoxTitle>

    <LayoutWrapperListHotels>
      <LayoutWrapperFilters>
        <FilterRange></FilterRange>
        <FilterRate></FilterRate>
      </LayoutWrapperFilters>
      <LayoutWrapperCards>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </LayoutWrapperCards>
    </LayoutWrapperListHotels>

  </Layout>
);

export default HomePage;
