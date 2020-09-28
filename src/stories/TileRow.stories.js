import React from 'react';
import { storiesOf } from '@storybook/react';

import { Provider } from 'react-redux';
import store from '../helpers/redux/store';

import TileRow from '../components/TileRow';
import '../components/Board.scss';
import '../components/TileRow.scss';


const withProvider = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
)

const exampleBoardRow = [
  {revealed: false, flag: false},
  {revealed: false, flag: true},
  {revealed: true, mine: true},
  {revealed: true, danger: 0},
  {revealed: true, danger: 1},
  {revealed: true, danger: 2},
  {revealed: true, danger: 3},
  {revealed: true, danger: 4},
  {revealed: true, danger: 5},
  {revealed: true, danger: 6},
  {revealed: true, danger: 7},
  {revealed: true, danger: 8},
  {revealed: false, flag: false},
  {revealed: false, flag: false},
  {revealed: false, flag: false},
  {revealed: false, flag: false},  
]

storiesOf("TileRow", module)
.addDecorator(withProvider)
.add('Tile Row', () => <TileRow boardRow={exampleBoardRow}/>)