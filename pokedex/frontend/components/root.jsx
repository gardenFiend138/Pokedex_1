import React from 'react';
import { Provider } from 'react-redux';
import Poke from './pokemon/pokemon_index';

const Root = ({ store }) => (
  <Provider store={store}>
    <div><Poke /></div>
  </Provider>
);

export default Root;
