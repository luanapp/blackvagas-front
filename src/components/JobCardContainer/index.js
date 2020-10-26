import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, CardHeader, IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '1000px',
      padding: theme.spacing(2, 4),
    },
  },
  favorite: {
    color: theme.palette.background.default
  },
  content: {
    paddingTop: 0,
  },
}));

const i18nKey = 'job-card-container';
const JobCardContainer = ({ title, children, actionSection, isFavorite }) => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  const headerAriaLabel = useMemo(() => t(`${i18nKey}.job-card-container`), [t]);
  const favorite = useMemo(() => {
    return isFavorite ? <FavoriteIcon fontSize="large" className={classes.favorite} /> :
    <FavoriteBorderIcon fontSize="large" className={classes.favorite} />
  }, [isFavorite]);

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader title={title} action={<IconButton aria-label={headerAriaLabel}>{favorite}</IconButton>} />
      <CardContent className={classes.content}>{children}</CardContent>
      {actionSection && <CardActions>{actionSection}</CardActions>}
    </Card>
  );
};

JobCardContainer.propTypes = {
  actionSection: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  isFavorite: PropTypes.bool,
  title: PropTypes.string,
};

JobCardContainer.defaultProps = {
  actionSection: null,
  isFavorite: false,
  title: '',
};

export default JobCardContainer;
