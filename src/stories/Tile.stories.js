import React from 'react';
import {storiesOf} from '@storybook/react';

import {Provider} from 'react-redux'
import store from '../helpers/redux/store'


import Tile from '../components/Tile';

const withProvider = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
)

storiesOf("Tile", module)
.addDecorator(withProvider)
.add("Unrevealed", () => <Tile revealed={false} id={5}/>)
.add("Revealed No Danger", () => <Tile revealed={true} danger={0}/>)
.add("Revealed Danger 1", () => <Tile revealed={true} danger={1}/>)
.add("Revealed Danger 2" , () => <Tile revealed={true} danger={2}/>)
.add("Revealed Danger 3", () => <Tile revealed={true} danger={3}/>)
.add("Revealed Danger 4", () => <Tile revealed={true} danger={4}/>)
.add("Revealed Danger 5", () => <Tile revealed={true} danger={5}/>)
.add("Revealed Danger 6", () => <Tile revealed={true} danger={6}/>)
.add("Revealed Danger 7", () => <Tile revealed={true} danger={7}/>)
.add("Revealed Danger 8", () => <Tile revealed={true} danger={8}/>)
.add("Revealed Danger 8", () => <Tile revealed={true} danger={8}/>)