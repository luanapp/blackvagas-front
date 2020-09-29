import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { JobCardContainer, RelativeDateLabel, MoneyLabel } from '@components';
import { Typography } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
  },
  upperLabel: {
    fontSize: '1.125rem',
    color: fade(theme.colors.black, 0.75),
  },
}));

const i18nPrexix = 'job-card';
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
    <JobCardContainer title={title}>
      <Typography variant="body2" component="p" className={classes.upperLabel}>
        {company}
      </Typography>
      <Typography variant="body2" gutterBottom component="p" className={classes.upperLabel}>
        {`${city}, ${state}`}
      </Typography>
      <MoneyLabel value={montlyIncome} />
      <RelativeDateLabel date={creationDate} dateSufix={t(`${i18nPrexix}.relative-date-prefix`)} />
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
