import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Catalog from './components/Catalog';
import Cart from './components/Cart';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default () => {
  const [cartCount, setcartCount] = useState(0);

  /* event listener start*/
  document.getElementsByTagName('body')[0].addEventListener(
    'addToCart',
    () => {
      setcartCount(cartCount + 1);
    },
    false
  );

  document.getElementsByTagName('body')[0].addEventListener(
    'removeFromCart',
    () => {
      setcartCount(cartCount - 1);
    },
    false
  );
  /* event listener end*/

  const classes = useStyles();
  return (
    <BrowserRouter>
      <header className={classes.header}>
        <Link to='/'>
          <Typography variant='h4'>FooBar.com</Typography>
        </Link>
        <Link to='/cart'>
          <Button variant='contained' color='primary'>
            Go to Cart {cartCount}
          </Button>
        </Link>
      </header>

      <hr />

      <Switch>
        <Route exact path='/cart' component={Cart} />
        <Route path='/' component={Catalog} />
      </Switch>

      <hr />

      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </BrowserRouter>
  );
};
