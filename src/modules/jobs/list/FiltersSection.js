import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getJobLocations, getJobTypes } from '@services/jobs';
import FilterSection from '../../../components/FilterSection';
import { useInfiniteQuery, useQuery } from 'react-query';
import { pathOr } from 'ramda';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 4),
    },
  },
  filterContainer: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(5),
    },
  },
}));

const ORDER_BY_FIELDS = [
  { key: 'relevance', value: 'relevance' },
  { key: 'date', value: 'date' },
];

const FiltersSection = ({ filters, onChange }) => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  const onFilterChange = useCallback(filters => onChange(filters), [onChange]);
  const { data: typesData, isError: isTypesError, isLoading: isTypesLoading } = useQuery('jobsTypes', getJobTypes, {
    retry: false,
  });
  const { data: locData, isError: isLocError, isLoading: isLocLoading } = useQuery('jobsLocation', getJobLocations, {
    retry: false,
  });
  const jobTypes = useMemo(() => pathOr([], ['data'], typesData).map(type => ({ key: type, value: type })), [
    typesData,
  ]);
  const places = useMemo(
    () =>
      pathOr([], ['data', 'results'], locData).map(({ id, state, city }) => ({ key: id, value: `${city}, ${state}` })),
    [locData]
  );

  return (
    <Paper className={classes.root}>
      <div className={classes.filterContainer}>
        <FilterSection
          useI18n
          title={t('filter-section.order-by')}
          filters={filters}
          values={ORDER_BY_FIELDS}
          onClick={value => onFilterChange({ order: value })}
        />
      </div>
      <div className={classes.filterContainer}>
        <FilterSection
          title={t('filter-section.filter-place')}
          filters={filters}
          values={places}
          vertical
          onClick={value => onFilterChange({ location: value })}
        />
      </div>
      <div className={classes.filterContainer}>
        <FilterSection
          title={t('filter-section.job-type')}
          filters={filters}
          values={jobTypes}
          vertical
          useI18n
          onClick={value => onFilterChange({ type: value })}
        />
      </div>
    </Paper>
  );
};

FiltersSection.propTypes = {
  filters: PropTypes.shape({
    order: PropTypes.string.isRequired,
  }).isRequired,
};

export default FiltersSection;
