import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Paper, Typography, Container } from '@material-ui/core';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Fields from './fields';
import { resetPassword } from '@services/authentication';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '50rem',
  },
  login: {
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      height: '35%',
    },
  },
  header: {
    margin: theme.spacing(5, 2, 1),
  },
}));

const doReset = ({ location, history }) => async ({ email }) => {
  const { error } = await resetPassword({ email });
};

const ResetPassword = () => {
  const classes = useStyles();
  const [t] = useTranslation(['login']);
  const history = useHistory();
  const location = useLocation();

  const validation = Yup.object().shape({
    email: Yup.string().required(t('errors.email_required')).email(t('errors.email_invalid')),
  });

  return (
    <Container className={classes.root}>
      <Paper elevation={2} draggable className={classes.login}>
        <Typography variant="h5" align="center" className={classes.header}>
          {t('reset-password')}
        </Typography>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={validation}
          onSubmit={doReset({ location, history })}
        >
          {props => <Fields {...props} />}
        </Formik>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
