import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import parseISO from 'date-fns/parseISO';
import { AccessTime as AccessTimeIcon } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 0,
  },
  clockIcon: {
    width: '20px',
    marginRight: '4px',
  },
  dateLabel: {
    margin: 'auto 0',
    verticalAlign: 'middle',
  },
}));

const RelativeDateLabel = ({ dateSufix, date }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AccessTimeIcon className={classes.clockIcon} />
      <Typography variant="body2" component="p" className={classes.dateLabel}>
        {formatDistance(parseISO(date), new Date(), {
          locale: ptBR, // FIXME
          addSuffix: dateSufix,
        })}
      </Typography>
    </div>
  );
};

RelativeDateLabel.propTypes = {
  date: PropTypes.string.isRequired,
  dateSufix: PropTypes.string.isRequired,
};

export default RelativeDateLabel;
