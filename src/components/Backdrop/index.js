import React from 'react';
import { Backdrop as MuiBackdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    zIndex: 9999,
  },
});

const Backdrop = () => {
  const classes = useStyles();
  return (
    <MuiBackdrop className={classes.root} open={true}>
      <CircularProgress color="inherit" />
    </MuiBackdrop>
  );
};

export default Backdrop;
