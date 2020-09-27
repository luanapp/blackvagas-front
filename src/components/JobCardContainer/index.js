import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent, CardHeader, IconButton } from '@material-ui/core';
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
}));

const i18nKey = 'job-card-container';
const JobCardContainer = ({ title, children, actionSection, isFavorite }) => {
  const classes = useStyles();
  const [t] = useTranslation('jobs');
  const headerAriaLabel = useMemo(() => t(`${i18nKey}.job-card-container`), [t]);
  const favorite = useMemo(() => (isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />), [isFavorite]);

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader title={title} action={<IconButton aria-label={headerAriaLabel}>{favorite}</IconButton>} />
      <CardContent>{children}</CardContent>
      {actionSection && <CardActionArea>{actionSection}</CardActionArea>}
    </Card>
  );
};

JobCardContainer.propTypes = {
  actionSection: PropTypes.element,
  children: PropTypes.element.isRequired,
  isFavorite: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

JobCardContainer.defaultProps = {
  actionSection: null,
  isFavorite: false,
};

export default JobCardContainer;
