import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: '15px',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <header className={classes.header}>
        <Typography variant="h4" >
          FooBar.com
        </Typography>
        <Link to="/cart">
          <Button variant="contained" color="primary">
            Go to Cart
          </Button>
        </Link>
      </header>

      <hr />

      {children}

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
    </div>
  )
};
