import React from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton, Input } from '@material-ui/core';
import { SearchSharp as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  input: {
    width: 'calc(100% - 54px)',
  },
});

const SearchBox = ({ text, onChange, sm, xs }) => {
  const classes = useStyles();
  return (
    <Grid item sm={sm} xs={xs}>
      <IconButton className={classes.iconButton} aria-label="search" onChange={onChange}>
        <SearchIcon />
      </IconButton>
      <Input className={classes.input} placeholder={text} inputProps={{ 'aria-label': 'search' }} />
    </Grid>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func,
  sm: PropTypes.number,
  text: PropTypes.string.isRequired,
  xs: PropTypes.number,
};

SearchBox.defaultProps = {
  onChange: () => {},
  sm: 12,
  xs: 12,
};

export default SearchBox;
