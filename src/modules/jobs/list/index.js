import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Grid, Paper, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBox } from '@components';
import Listsection from './ListSection';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '2000px',
    padding: theme.spacing(1, 2),
    [theme.breakpoints.up('sm')]: {
      padding: '5rem 20%',
    },
  },
  search: {
    margin: 'auto',

    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');

  return (
    <div>
      <Grid container alignContent="center" alignItems="center" className={classes.root}>
        <Grid item sm={12} xs={12} className={classes.search}>
          <SearchBox onChange={() => {}} text={t('job-search')} />
        </Grid>
        <Grid container item spacing={3}>
          <Hidden xsDown>
            <Grid item sm={3}>
              <Paper>Ordenar Por</Paper>
            </Grid>
          </Hidden>
          <Grid item sm={9} xs={12}>
            <Listsection />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

JobList.propTypes = {};

JobList.defaultProps = {};

export default JobList;
