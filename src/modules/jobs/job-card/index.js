import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { JobCardContainer, RelativeDateLabel, MoneyLabel } from '@components';
import { Button, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/styles';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  upperLabel: {
    fontSize: '1.125rem',
    color: fade(theme.colors.black, 0.75),
  },
}));

export const JobCardPlaceHolder = () => (
  <Skeleton variant="rect" component={JobCardContainer}>
    <Skeleton variant="text" component={Typography} />
    <Skeleton variant="text" component={Typography} />
    <Skeleton variant="text" component={Typography} />
    <Skeleton variant="text" component={Typography} />
  </Skeleton>
);

const CardAction = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

const i18nPrexix = 'job-card';
const jobI18n = key => `${i18nPrexix}.${key}`;
const JobCard = ({
  job: {
    title,
    company,
    location: { city, state },
    montlyIncome,
    creationDate,
  },
}) => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  return (
    <JobCardContainer title={title} actionSection={<CardAction label={t(jobI18n('apply'))} />}>
      <Typography variant="body2" component="p" className={classes.upperLabel}>
        {company}
      </Typography>
      <Typography variant="body2" gutterBottom component="p" className={classes.upperLabel}>
        {`${city}, ${state}`}
      </Typography>
      <MoneyLabel value={montlyIncome} />
      <RelativeDateLabel date={creationDate} dateSufix={t(jobI18n('relative-date-prefix'))} />
    </JobCardContainer>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
    montlyIncome: PropTypes.number.isRequired,
    creationDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
