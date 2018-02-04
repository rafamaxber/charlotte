import React from 'react';
import { storiesOf } from '@storybook/react';
import PriceChart from './PriceChart';

const mock = [{ "price_history": [{ "month": "Jan", "value": 438 }, { "month": "Feb", "value": 400.1 }, { "month": "Mar", "value": 425 }, { "month": "Apr", "value": 433.6 }, { "month": "May", "value": 428.4 }, { "month": "Jun", "value": 415 }, { "month": "Jul", "value": 412 }] }];

storiesOf('PriceChart', module)
  .add('PriceChart', () => (
    <PriceChart
      history={mock[0].price_history}
    ></PriceChart>
  ));
