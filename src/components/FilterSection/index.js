import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Fields from './Fields';
import Header from './Header';

export const FiltersPlaceHolder = () => (
  <Skeleton variant="rect" component={FiltersSection}>
    <Skeleton component={Typography} />
    <Skeleton component={Typography} />
    <Skeleton component={Typography} />
  </Skeleton>
);

const FiltersSection = ({ title, filters, values, onClick, useI18n, vertical }) => {
  const filterComponents = useMemo(
    () => <Fields filters={filters} onClick={onClick} useI18n={useI18n} values={values} vertical={vertical} />,
    [useI18n, onClick, values, vertical]
  );
  return (
    <div>
      <Header title={title} />
      <div>{filterComponents}</div>
    </div>
  );
};

FiltersSection.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
  onClick: PropTypes.func,
  filters: PropTypes.object,
};

FiltersSection.defaultProps = {
  title: '',
  filters: {
    order: 'date',
  },
  values: [],
  onClick: () => {},
  useI18n: false,
  vertical: false,
};

export { default as Fields } from './Fields';
export { default as Header } from './Header';
export default FiltersSection;
