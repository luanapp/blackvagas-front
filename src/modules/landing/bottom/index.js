import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import image from './images/landing-bottom.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  media: {
    paddingTop: '72.25%',
    verticalAlign: 'bottom',
    position: 'relative',
    borderRadius: theme.spacing(1),
  },
  card: {
    backgroundColor: 'transparent',
  },
  leftContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(14),
    },
    padding: theme.spacing(5),
  },
  rightContainer: {
    padding: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(10, 14, 10, 0),
    },
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const Middle = () => {
  const [skill, setSkill] = useState(null);
  const classes = useStyles();
  const { t } = useTranslation(['landing']);
  const tPrefix = 'middle';
  const tKey = key => `${tPrefix}.${key}`;

  const handleChange = event => {
    const value = event.target.value;
    setSkill(skill);
  };

  return (
    <Grid container item alignItems="center" className={classes.root}>
      <Grid container item sm={6} xs={12} direction="column" alignItems="flex-end" className={classes.leftContainer}>
        <Typography p={5} color="initial" variant="h2" align="right">
          {t(tKey('main-text'))}
        </Typography>
        <FormControl color="primary">
          <InputLabel htmlFor="skills">Skills</InputLabel>
          <NativeSelect
            value={skill}
            onChange={handleChange}
            inputProps={{
              name: 'skills',
              id: 'skills',
            }}
          >
            <option aria-label="None" value="" />
            <option value="a">Ten</option>
            <option value="b">Twenty</option>
            <option value="c">Thirty</option>
          </NativeSelect>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item sm={6} xs={12} className={classes.rightContainer}>
        <Card elevation={0} className={classes.card}>
          <CardMedia className={classes.media} image={image} />{' '}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Middle;
