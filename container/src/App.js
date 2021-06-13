import React from 'react';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  header: {
    padding: '20px',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <Typography variant="h3" >
          FooBar.com
        </Typography>
      </header>

      <hr />

      <Catalog />
      <Cart />

      <hr />
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  )
}