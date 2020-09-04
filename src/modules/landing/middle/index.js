import React from 'react';
import { Grid, Typography, Card, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import image from './images/landing-middle.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  media: {
    paddingTop: '72.25%',
    verticalAlign: 'bottom',
    position: 'relative',
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'transparent',
  },
  textContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(14),
    },
    padding: theme.spacing(5),
  },
  cardContainer: {
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(10, 0, 10, 14),
    },
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const Middle = () => {
  const classes = useStyles();
  const [t] = useTranslation(['landing']);
  const tPrefix = 'middle';
  const tKey = key => `${tPrefix}.${key}`;

  return (
    <Grid container item alignItems="center" className={classes.root}>
      <Grid item sm={6} xs={12} className={classes.cardContainer}>
        <Card elevation={0} className={classes.card}>
          <CardMedia className={classes.media} image={image} />{' '}
        </Card>
      </Grid>
      <Grid container item sm={6} xs={12} direction="column" alignItems="flex-end" className={classes.textContainer}>
        <Typography p={5} color="initial" variant="h2" align="right">
          {t(tKey('main-text'))}
        </Typography>
        <Button color="secondary" variant="contained" className={classes.button}>
          {t(tKey('want-to-be-part'))}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Middle;
