import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FilterSection from '../../../components/FilterSection';

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

const ORDER_BY_FIELDS = { RELEVANCE: 'relevance', DATE: 'date' };
const places = ['Belo Horizonte, MG', 'Nova Lima, MG', 'Minas Gerais'];
const jobTypes = ['Tempo Integral', 'Estágio', 'Efetivo/CLT', 'Freelancer', 'Meio Período'];

const FiltersSection = ({ filters, onChange }) => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  const onFilterChange = useCallback(filters => onChange(filters), [onChange]);

  return (
    <Paper className={classes.root}>
      <div className={classes.filterContainer}>
        <FilterSection
          useI18n
          title={t('filter-section.order-by')}
          filters={filters}
          values={Object.values(ORDER_BY_FIELDS)}
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
