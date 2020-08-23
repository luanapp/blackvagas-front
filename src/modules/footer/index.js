import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Social from './social';
import Menu from './menu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.main,
    padding: 85,
    paddingBottom: 0,
  },
  link: {
    padding: 10,
  },
  copyright: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 85,
    paddingBottom: 15,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container alignItems="center">
        <Grid container item sm={12} xs={12}>
          <Grid container item sm={4} xs={12} alignItems="flex-start">
            <Typography color="textPrimary" variant="h5">
              BlackVagas
            </Typography>
          </Grid>
          <Menu sm={4} xs={12} />
          <Social sm={4} xs={12} />
        </Grid>
        <Grid container item sm={12} xs={12}>
          <Typography
            color="initial"
            variant="body1"
            className={classes.copyright}
          >
            Copyright © 2008-2020, BlackVagas, Inc.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
