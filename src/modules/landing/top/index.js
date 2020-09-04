import React from 'react';
import { Grid, Typography, Card, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import people from './images/people.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    paddingTop: '72.25%',
    verticalAlign: 'bottom',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(20),
    },
  },
  card: {
    backgroundColor: 'transparent',
  },
  textContainer: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(14),
    },
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const Top = () => {
  const classes = useStyles();
  const [t] = useTranslation(['landing']);
  const tPrefix = 'top';
  const tKey = key => `${tPrefix}.${key}`;

  return (
    <Grid container item alignItems="center" className={classes.root}>
      <Grid
        container
        item
        sm={6}
        xs={12}
        direction="column"
        alignItems="flex-start"
        justify="space-around"
        className={classes.textContainer}
      >
        <Typography color="textSecondary" variant="h2" align="left">
          {t(tKey('main-text'))}
        </Typography>
        <Button color="primary" variant="contained" className={classes.button}>
          {t(tKey('find-vacant-jobs'))}
        </Button>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Card elevation={0} className={classes.card}>
          <CardMedia className={classes.media} image={people} />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Top;
