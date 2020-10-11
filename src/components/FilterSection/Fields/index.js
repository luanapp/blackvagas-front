import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { cond, pathOr, equals, T, always } from 'ramda';

const useStyles = makeStyles({
  selectedFilter: {
    color: '#AF1F00',
  },
  unselectedFilter: {
    fontWeight: 'normal',
  },
});

const Fields = ({ values, filters, onClick, useI18n, vertical }) => {
  const classes = useStyles();
  const [t] = useTranslation('filters');

  const getFilterClass = useCallback(
    cond([
      [equals(pathOr('', ['order'], filters)), always(classes.selectedFilter)],
      [equals(pathOr('', ['location'], filters)), always(classes.selectedFilter)],
      [equals(pathOr('', ['type'], filters)), always(classes.selectedFilter)],
      [T, always(classes.unselectedFilter)],
    ]),
    [filters]
  );
  const handleClick = useCallback(filter => () => onClick(filter), [onClick]);
  const components = values.map(({ key, value }) => (
    <Typography key={value} component={vertical ? 'div' : 'a'}>
      <Button onClick={handleClick(key)} className={getFilterClass(key)}>
        {useI18n ? t(`filter-by.${value}`) : value}
      </Button>
    </Typography>
  ));
  return vertical ? components : components.reduce((prev, curr) => [prev, ' - ', curr]);
};

Fields.propTypes = {
  onClick: PropTypes.func,
  useI18n: PropTypes.bool,
  vertical: PropTypes.bool,
  values: PropTypes.array,
};

Fields.defaultProps = {
  onClick: () => {},
  values: [],
};

export default Fields;
