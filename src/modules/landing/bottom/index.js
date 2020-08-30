import React, { useMemo, useState } from 'react';
import { Grid, Typography, Card, CardMedia, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { pathOr } from 'ramda';
import { getSkills } from '../../../services';
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
  formControl: {
    marginTop: theme.spacing(4),
    minWidth: theme.spacing(28),
  },
}));

const Middle = () => {
  const [skill, setSkill] = useState('');
  const classes = useStyles();
  const { t } = useTranslation(['landing']);
  const { data, isLoading } = useQuery('skills', getSkills, { refetchOnWindowFocus: false });
  const skills = useMemo(() => pathOr([], ['data'], data), [data]);

  const tPrefix = 'bottom';
  const tKey = key => `${tPrefix}.${key}`;

  const handleChange = event => {
    const value = event.target.value;
    setSkill(value);
  };

  return (
    <Grid container item alignItems="center" className={classes.root}>
      <Grid container item sm={6} xs={12} direction="column" alignItems="flex-end" className={classes.leftContainer}>
        <Typography p={5} color="initial" variant="h2" align="right">
          {t(tKey('main-text'))}
        </Typography>
        <FormControl variant="standard" className={classes.formControl}>
          <InputLabel id="skill-label" color="secondary">
            {t(tKey('select-skill'))}
          </InputLabel>
          <Select
            disabled={isLoading}
            labelId="skill-label"
            value={skill}
            onChange={handleChange}
            inputProps={{
              name: 'skills',
              id: 'skills',
            }}
          >
            <MenuItem key="0" aria-label="None" value="" />
            {skills &&
              skills.map(({ id, localeKey }) => (
                <MenuItem key={id} value={id}>
                  {t(tKey(localeKey))}
                </MenuItem>
              ))}
          </Select>
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
