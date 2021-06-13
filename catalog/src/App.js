import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import ProductList from './components/ProductList';

export default () => {
  return (
    <div>
      <StylesProvider>
        <ProductList />

        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter> */}
      </StylesProvider>
    </div>
  )
}