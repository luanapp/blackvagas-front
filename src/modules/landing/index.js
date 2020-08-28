import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';

const Landing = () => (
  <Grid container alignItems="center">
    <Top />
    <Middle />
    <Divider variant="middle" />
    <Bottom />
    <Divider variant="middle" />
  </Grid>
);

export default Landing;
