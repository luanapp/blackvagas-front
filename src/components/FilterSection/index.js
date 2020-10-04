import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { cond, pathOr, equals, T, always } from 'ramda';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(1),
  },
  selectedFilter: {
    color: '#AF1F00',
  },
  unselectedFilter: {
    fontWeight: 'normal',
  },
}));

const FiltersSection = ({ title, filters, values, onClick, useI18n, vertical }) => {
  const classes = useStyles();
  const [t] = useTranslation('filters');
  const getFilterClass = useCallback(
    cond([
      [equals(pathOr('', ['order'], filters)), always(classes.selectedFilter)],
      [equals(pathOr('', ['location'], filters)), always(classes.selectedFilter)],
      [T, always(classes.unselectedFilter)],
    ]),
    [filters]
  );

  const filterComponents = useMemo(() => {
    const components = values.map(filter => (
      <Typography key={filter} component={vertical ? 'div' : 'a'}>
        <Button onClick={onClick} className={getFilterClass(filter)}>
          {useI18n ? t(`filter-by-${filter}`) : filter}
        </Button>
      </Typography>
    ));
    return vertical ? components : components.reduce((prev, curr) => [prev, ' - ', curr]);
  }, [t, getFilterClass]);

  return (
    <div>
      <div className={classes.header}>
        <Typography variant="h6" component="p">
          {title}
        </Typography>
      </div>
      <div>{filterComponents}</div>
    </div>
  );
};

FiltersSection.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.array,
  onClick: PropTypes.func,
  useI18n: PropTypes.bool,
  vertical: PropTypes.bool,
  filters: PropTypes.shape({
    order: PropTypes.string,
  }),
};

FiltersSection.defaultProps = {
  filters: {
    order: 'date',
  },
  values: [],
  onClick: () => {},
  useI18n: false,
  vertical: false,
};

export default FiltersSection;
