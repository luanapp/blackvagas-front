import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Paper, Typography, Container } from '@material-ui/core';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import LoginForm from './login-form';
import { login } from '@services/authentication';
import { useNotification } from '@hooks';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '50rem',
  },
  login: {
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      height: '50%',
    },
  },
  header: {
    margin: theme.spacing(5, 2, 1),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [t] = useTranslation(['login']);
  const history = useHistory();
  const location = useLocation();
  const { notifyError } = useNotification();

  const handleLogin = useCallback(
    async ({ email, password }) => {
      try {
        await login({ email, password });
        const { from } = location.state || { from: { pathname: '/' } };
        history.push(from);
      } catch {
        notifyError(t('errors.login-fail'));
      }
    },
    [location, history, notifyError, t]
  );

  const validation = Yup.object().shape({
    email: Yup.string().required(t('errors.email-required')).email(t('errors.email-invalid')),
    password: Yup.string().required(t('errors.password-required')),
  });

  return (
    <Container className={classes.root}>
      <Paper elevation={2} draggable className={classes.login}>
        <Typography variant="h5" align="center" className={classes.header}>
          {t('login')}
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validation}
          onSubmit={handleLogin}
        >
          {props => <LoginForm {...props} />}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Login;
