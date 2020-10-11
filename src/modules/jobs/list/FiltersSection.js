import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getJobLocations, getJobTypes } from '@services/jobs';
import { useInfiniteQuery, useQuery } from 'react-query';
import { pathOr } from 'ramda';
import { Alert } from '@material-ui/lab';
import FilterSection, { FiltersPlaceHolder, Fields, Header } from '../../../components/FilterSection';

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
  const { data: locData, isError: isLocError, isFetchingMore, fetchMore, canFetchMore } = useInfiniteQuery(
    'jobsLocation',
    getJobLocations,
    {
      getFetchMore: last => last.data.offset < last.data.size,
      retry: false,
    }
  );
  const { data: typesData, isError: isTypesError, isLoading: isTypesLoading } = useQuery('jobsTypes', getJobTypes, {
    retry: false,
  });
  const jobTypes = useMemo(() => pathOr([], ['data'], typesData).map(type => ({ key: type, value: type })), [
    typesData,
  ]);
  const getPlaces = data =>
    pathOr([], ['data', 'results'], data).map(({ id, state, city }) => ({ key: id, value: `${city}, ${state}` }));

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
        {isLocError && <Alert severity="error">{t('filter-section.error.place')}</Alert>}
        {isFetchingMore && <FiltersPlaceHolder />}
        {!isFetchingMore && locData && (
          <>
            <Header title={t('filter-section.filter-place')} />
            {locData.map((data, i) => (
              <Fields
                key={i}
                filters={filters}
                values={getPlaces(data)}
                vertical
                onClick={value => onFilterChange({ location: value })}
              />
            ))}
          </>
        )}
        {canFetchMore && <Button onClick={fetchMore}>Mais</Button>}
      </div>
      <div className={classes.filterContainer}>
        {isTypesError && <Alert severity="error">{t('filter-section.error.type')}</Alert>}
        {isTypesLoading && <FiltersPlaceHolder />}
        {!isTypesLoading && jobTypes && (
          <FilterSection
            title={t('filter-section.job-type')}
            filters={filters}
            values={jobTypes}
            vertical
            useI18n
            onClick={value => onFilterChange({ type: value })}
          />
        )}
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
