import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorBox from './ErrorBox';

storiesOf('ErrorBox', module)
  .add('ErrorBox network error', () => (
    <ErrorBox>
      Network error
    </ErrorBox>
  ));
