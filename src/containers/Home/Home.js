import React from 'react';
import Layout from '../../components/Layout/Layout';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import Hero from '../../components/Hero/Hero';
import BoxCalendar from '../../components/BoxCalendar/BoxCalendar';

const HomePage = () => (
  <Layout>
    <HeaderNavigation></HeaderNavigation>
    <Hero></Hero>
    <BoxCalendar></BoxCalendar>
  </Layout>
);

export default HomePage;
