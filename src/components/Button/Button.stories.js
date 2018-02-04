import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Button default shaped', () => (
    <Button typeBtn='default'>Shop Now</Button>
  ))
  .add('Button default green', () => (
    <Button typeBtn='info'>Book now</Button>
  ))
  .add('Button default shaped small', () => (
    <Button typeBtn='default' size='small'>Price history</Button>
  ));
