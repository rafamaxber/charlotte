
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import styled from 'styled-components';
import Header from './HeaderNavigation';

const Stage = styled.div`
  background-color: #113875;
  width: 100%;
  height: 300px;
`;

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .add('Header', () => (
    <Stage>
      <Header></Header>
    </Stage>
  ));