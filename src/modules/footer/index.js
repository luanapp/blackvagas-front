import React from 'react';
import { Grid, Typography, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Social from './social';
import Menu from './menu';
import theme from '../landing/theme';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.main,

    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 14, 0),
    },
  },
  companyContainer: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  copyright: {
    margin: theme.spacing(0, 'auto', 0),
    padding: theme.spacing(10, 0, 2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <footer className={classes.root}>
        <Grid container alignItems="center">
          <Grid container item sm={12} xs={12}>
            <Grid container item sm={4} xs={12} justify="center" className={classes.companyContainer}>
              <Typography color="inherit" variant="h5">
                BlackVagas
              </Typography>
            </Grid>
            <Menu sm={4} xs={12} />
            <Social sm={4} xs={12} />
          </Grid>
          <Grid container item sm={12} xs={12}>
            <Typography color="initial" variant="body1" className={classes.copyright}>
              Copyright © 2008-2020, BlackVagas, Inc.
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </ThemeProvider>
  );
};

export default Footer;
