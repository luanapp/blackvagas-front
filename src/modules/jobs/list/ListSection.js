import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { pathOr, isEmpty } from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { getJobs } from '../../../services/jobs';
import JobCard, { JobCardPlaceHolder } from '../job-card';

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(3, 0),
  },
}));

export const ListSectionPlaceHolder = () => {
  const classes = useStyles();
  return [1, 2, 3, 4].map(n => (
    <div key={n} className={classes.card}>
      <JobCardPlaceHolder />
    </div>
  ));
};

const ErrorAlert = ({ t }) => (
  <Alert severity="error">
    <AlertTitle>{t('list-section.searchError')}</AlertTitle>
  </Alert>
);

const NoResultsAlert = ({ t }) => (
  <Alert severity="warning">
    <AlertTitle>{t('list-section.noResults')}</AlertTitle>
  </Alert>
);

const ListSection = ({ filters }) => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  const { data, isError, isLoading } = useQuery(['jobs', filters], getJobs, { retry: false });
  const jobResult = useMemo(() => pathOr({}, ['data'], data), [data]);
  const { page, limit, results: jobs } = jobResult || {};

  return (
    <>
      {isLoading && <ListSectionPlaceHolder />}
      {isError && <ErrorAlert t={t} />}
      {isEmpty(jobs) && <NoResultsAlert t={t} />}
      {jobs &&
        jobs.map(job => (
          <div key={job.id} className={classes.card}>
            <JobCard job={job} classes={{ root: classes.card }} />
          </div>
        ))}
    </>
  );
};

ListSection.propTypes = {
  filters: PropTypes.object.isRequired,
};

export default ListSection;
