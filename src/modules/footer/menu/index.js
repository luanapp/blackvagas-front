import React from 'react';
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  link: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
      fontSize: 16,
    },
  },
}));

const Menu = ({ sm, xs }) => {
  const classes = useStyles();
  const [t] = useTranslation(['footer']);
  const linksLeft = [
    {
      label: 'about',
      link: 'http://www.google.com',
    },
    {
      label: 'blog',
      link: 'http://www.google.com',
    },
    {
      label: 'for-companies',
      link: 'http://www.google.com',
    },
  ];

  const linksRight = [
    {
      label: 'speak-to-us',
      link: 'http://www.google.com',
    },
    {
      label: 'find-a-job-vacancy',
      link: 'http://www.google.com',
    },
    {
      label: 'mbm',
      link: 'http://www.google.com',
    },
  ];

  return (
    <Grid container item sm={sm} xs={xs} justify="center">
      <Grid container item sm={6} xs={6} direction="column">
        {linksLeft.map(({ label, link }) => (
          <Link key={label} color="secondary" href={link} target="_blank" className={classes.link} noWrap>
            {t(label)}
          </Link>
        ))}
      </Grid>
      <Grid container item sm={6} xs={6} direction="column">
        {linksRight.map(({ label, link }) => (
          <Link key={label} color="secondary" href={link} target="_blank" className={classes.link} noWrap>
            {t(label)}
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

Menu.propTypes = {
  sm: PropTypes.number.isRequired,
  xs: PropTypes.number.isRequired,
};

export default Menu;
