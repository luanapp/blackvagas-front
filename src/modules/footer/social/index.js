import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  button: {
    padding: theme.spacing(1),
  },
}));

const Social = ({ sm, xs }) => {
  const classes = useStyles();
  return (
    <Grid container item sm={sm} xs={xs} className={classes.root} alignItems="flex-start" justify="center">
      <IconButton className={classes.button} target="_blank" href="https://www.facebook.com/MovimentoBlackMoney">
        <FacebookIcon aria-label="facebook" color="primary" fontSize="large" />
      </IconButton>
      <IconButton className={classes.button} target="_blank" href="https://www.instagram.com/movimentoblackmoney">
        <InstagramIcon aria-label="instagram" color="primary" fontSize="large" />
      </IconButton>
      <IconButton
        className={classes.button}
        target="_blank"
        href="https://www.linkedin.com/company/movimentoblackmoney/"
      >
        <LinkedInIcon aria-label="linkedin" color="primary" fontSize="large" />
      </IconButton>
      <IconButton className={classes.button} target="_blank" href="https://twitter.com/movblackmoney">
        <TwitterIcon aria-label="twitter" color="primary" fontSize="large" />
      </IconButton>
    </Grid>
  );
};

Social.propTypes = {
  sm: PropTypes.number.isRequired,
  xs: PropTypes.number.isRequired,
};

export default Social;
