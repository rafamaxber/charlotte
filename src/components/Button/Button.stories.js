import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Button default shaped', () => (
    <Button typeBtn='default'></Button>
  ))
  .add('Button default green', () => (
    <Button typeBtn='level2' text='Book now'></Button>
  ))
  .add('Button default shaped small', () => (
    <Button typeBtn='default' btnSize='small' text='Price history'></Button>
  ));
