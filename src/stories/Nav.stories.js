import React from 'react';
import { storiesOf } from '@storybook/react';

import { Provider } from 'react-redux';
import store from '../helpers/redux/store';

import Nav from '../components/Nav';
import ResetEmoji from '../components/ResetEmoji'
import StatDisplay from '../components/StatDisplay'
import '../App.scss';
import '../components/Nav.scss';
import '../components/StatDisplay.scss';
import '../components/ResetEmoji.scss';

const withProvider = (story) => <Provider store={store}>{story()}</Provider>;

storiesOf('Game Nav', module)
  .addDecorator(withProvider)
  .addParameters({
    backgrounds: [{ name: "darkGreen", value: 'rgb(49, 111, 29)', default: true}]
  })
  .add('Full Nav', () => <Nav />)
  .add('Reset Emoji', () => <ResetEmoji />)
  .add('Stat Display', () => <StatDisplay />)

export default {
  title: 'Nav',
  argTypes: { onClick: { action: 'Reset' } },
};
