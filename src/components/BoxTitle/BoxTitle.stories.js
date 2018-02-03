import React from 'react';
import { storiesOf } from '@storybook/react';
import BoxTitle from './BoxTitle';

storiesOf('BoxTitle', module)
  .add('BoxTitle', () => (
    <BoxTitle>
      Select the dates to stay in Charlotte
    </BoxTitle>
  ));
