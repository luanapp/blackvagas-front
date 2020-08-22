import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import people from './images/people.png';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  media: {
    paddingTop: '72.25%',
    marginTop: 30,
    verticalAlign: 'bottom',
    position: 'relative',
  },
  card: {
    backgroundColor: 'transparent',
  },
  textContainer: {
    textAlign: 'left',
    padding: 50,
  },
  buttonContainer: {
    paddingLeft: 50,
  },
}));

const Top = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid container item sm={6} xs={12}>
          <Grid
            container
            item
            sm={12}
            xs={12}
            className={classes.textContainer}
          >
            <Typography p={5} color="textSecondary" variant="h2">
              Você está na vitrine profissional da comunidade negra
            </Typography>
          </Grid>
          <Grid
            container
            item
            sm={12}
            xs={12}
            className={classes.buttonContainer}
          >
            <Button color="primary" variant="contained">
              Encontrar Vagas
            </Button>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card elevation={0} className={classes.card}>
            <CardMedia className={classes.media} image={people} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
