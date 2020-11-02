import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { JobCardContainer, RelativeDateLabel, MoneyLabel } from '@components';
import { Button, Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/styles';
import { Skeleton } from '@material-ui/lab';
import { useAuthentication } from '@hooks';
import { toggleFavorite } from '@services/user';

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
    id,
    title,
    company,
    location: { city, state },
    isFavorite,
    montlyIncome,
    creationDate,
  },
}) => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  const { currentUser } = useAuthentication();
  const onFavoriteClick = useCallback(
    jobId => () => {
      toggleFavorite('', { jobId, userId: currentUser });
    },
    [currentUser]
  );

  return (
    <JobCardContainer
      title={title}
      isFavorite={isFavorite}
      onFavoriteClick={onFavoriteClick(id)}
      actionSection={<CardAction label={t(jobI18n('apply'))} />}
    >
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
    title: PropTypes.string,
    company: PropTypes.string,
    isFavorite: PropTypes.bool,
    location: PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string,
    }),
    montlyIncome: PropTypes.number,
    creationDate: PropTypes.string,
  }),
};

JobCard.defaultProps = {
  job: {},
};

export default JobCard;
