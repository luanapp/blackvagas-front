import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, Typography, Container } from '@material-ui/core';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import LoginForm from './login-form';
import { login } from '../../services';

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

const doLogin = history => async ({ email, password }) => {
  const { jwt, error } = await login({ email, password });
  if (!!jwt) {
    history.push('/');
  }
};

const Login = () => {
  const classes = useStyles();
  const [t] = useTranslation(['login']);
  const history = useHistory();

  const validation = Yup.object().shape({
    email: Yup.string().required(t('errors.email_required')).email(t('errors.email_invalid')),
    password: Yup.string().required(t('errors.password_required')),
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
          onSubmit={doLogin(history)}
        >
          {props => <LoginForm {...props} />}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Login;
