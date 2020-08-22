import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '50px',
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    position: 'fixed',
    display: 'flex',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box display="flex" margin="auto">
        Copyright © 2008-2020, BlackVagas, Inc.
      </Box>
    </footer>
  );
};

export default Footer;
