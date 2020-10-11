import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(1),
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h6" component="p">
        {title}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
