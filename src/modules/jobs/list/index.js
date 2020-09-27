import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { SearchBox } from '@components';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from '../job-card';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    [theme.breakpoints.up('sm')]: {
      padding: '5rem 20%',
    },
  },
  search: {
    margin: 'auto',
    maxWidth: '1000px',
  },
}));

const job = {
  title: 'Designer Gráfico/Estágio',
  company: 'Agencia Madder',
  location: {
    city: 'Belo Horizonte',
    state: 'MG',
  },
  montlyIncome: 823,
  creationDate: '2020-06-21T18:20:02Z',
};

const JobList = props => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  return (
    <div>
      <Grid container alignContent="center" alignItems="center" className={classes.root}>
        <Grid item sm={12} xs={12} className={classes.search}>
          <SearchBox onChange={() => {}} text={t('job-search')} />
        </Grid>
        <Grid container item>
          <Grid item>
            <Paper></Paper>
          </Grid>
          <Grid item>
            <JobCard job={job} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

JobList.propTypes = {};

export default JobList;
