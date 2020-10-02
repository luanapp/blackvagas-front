import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { pathOr } from 'ramda';
import { Grid, Paper, Hidden, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBox } from '@components';
import { getJobs } from '../../../services/jobs';
import JobCard from '../job-card';
import { Skeleton } from '@material-ui/lab';

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
  card: {
    margin: theme.spacing(3),
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  const { data, isError, isLoading } = useQuery('jobs', getJobs, { retry: false });
  const jobResult = useMemo(() => pathOr({}, ['data'], data), [data]);
  const { page, limit, results: jobs } = jobResult || {};

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
            {isLoading && (
              <Skeleton>
                <Skeleton />
                <Skeleton width="60%" />
              </Skeleton>
            )}
            {jobs &&
              jobs.map(job => (
                <div key={job.id} className={classes.card}>
                  <JobCard job={job} classes={{ root: classes.card }} />
                </div>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

JobList.propTypes = {};

JobList.defaultProps = {};

export default JobList;
