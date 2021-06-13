import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import ProductList from './components/ProductList';

export default () => {
  return (
    <StylesProvider>
      <ProductList />
    </StylesProvider>
  )
}