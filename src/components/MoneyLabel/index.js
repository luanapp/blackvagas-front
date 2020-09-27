import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const MoneyLabel = ({ value }) => {
  const [t] = useTranslation('money');
  return (
    <div>
      <Typography gutterBottom variant="h5">
        <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={t('money-prefix')} />
      </Typography>
    </div>
  );
};

MoneyLabel.propTypes = {
  value: PropTypes.number,
};

MoneyLabel.defaultProps = {
  value: 0,
};

export default MoneyLabel;
