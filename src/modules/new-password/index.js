import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, Typography, Container } from '@material-ui/core';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import PasswordForm from './password-form';
import { changePassword, checkChangePasswdToken } from '@services/authentication';
import { useNotification, useQuery, useMountEffect } from '@hooks';

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
  const { notifyError, notifySuccess } = useNotification();
  const query = useQuery();
  const token = query.get('token');
  const [username, setUsername] = useState('');

  const handlePasswdChange = useCallback(
    async ({ newPassword, confirmPassword }) => {
      try {
        await changePassword({ newPassword, confirmPassword, token });
        notifySuccess(t('success.change-password'));
        history.push('/login');
      } catch {
        notifyError(t('errors.password-change-fail'));
      }
    },
    [history, notifySuccess, notifyError, t, token]
  );

  const validation = Yup.object().shape({
    newPassword: Yup.string().required(t('errors.email-required')),
    confirmPassword: Yup.string()
      .required(t('errors.password-required'))
      .oneOf([Yup.ref('newPassword')], t('errors.passwords-must-match')),
  });

  const handleCheckToken = async token => {
    try {
      if (!token) {
        notifyError(t('errors.invalid-link'));
        return;
      }

      const data = await checkChangePasswdToken({ token });
      setUsername(data.username);
    } catch {
      notifyError(t('errors.invalid-link'));
    }
  };

  useMountEffect(() => {
    handleCheckToken(token);
  });

  return (
    <Container className={classes.root}>
      <Paper elevation={2} draggable className={classes.login}>
        <Typography variant="h5" align="center" className={classes.header}>
          {t('login')}
        </Typography>
        <Formik
          enableReinitialize
          initialValues={{
            username,
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={validation}
          onSubmit={handlePasswdChange}
        >
          {props => <PasswordForm {...props} />}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Login;
