import React from 'react';
import { Divider, Grid, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';

const Landing = () => (
  <ThemeProvider theme={theme}>
    <Grid container alignItems="center">
      <Top />
      <Middle />
      <Divider variant="middle" />
      <Bottom />
      <Divider variant="middle" />
    </Grid>
  </ThemeProvider>
);

export default Landing;
