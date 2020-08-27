import React from 'react';
import { Grid, Typography, Card, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import holdingPad from './images/holding-pad.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  media: {
    paddingTop: '72.25%',
    marginTop: 30,
    verticalAlign: 'bottom',
    position: 'relative',
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'transparent',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 90,
    paddingRight: 90,
  },
  textContainer: {
    textAlign: 'left',
    padding: 50,
  },
  buttonContainer: {
    paddingRight: 50,
  },
  button: {
    marginLeft: 'auto',
  },
}));

const Middle = () => {
  const classes = useStyles();
  const { t } = useTranslation(['landing']);
  const tPrefix = 'middle';
  const tKey = key => `${tPrefix}.${key}`;

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item sm={6} xs={12}>
          <Card elevation={0} className={classes.card}>
            <CardMedia className={classes.media} image={holdingPad} />{' '}
          </Card>
        </Grid>
        <Grid container item sm={6} xs={12}>
          <Grid container item sm={12} xs={12} className={classes.textContainer}>
            <Typography p={5} color="initial" variant="h2" align="right">
              {t(tKey('main-text'))}
            </Typography>
          </Grid>
          <Grid container item sm={12} xs={12} className={classes.buttonContainer}>
            <Button color="secondary" variant="contained" className={classes.button}>
              {t(tKey('want-to-be-part'))}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Middle;
