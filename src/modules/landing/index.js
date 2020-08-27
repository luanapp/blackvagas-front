import React from 'react';
import { Divider } from '@material-ui/core';
import Top from './top';
import Middle from './middle';

const Landing = ({ props }) => {
  const prop = {};

  return (
    <div>
      <Top />
      <Middle />
      <Divider variant="middle" style={{ marginLeft: 40, marginRight: 40 }} />
    </div>
  );
};

export default Landing;
