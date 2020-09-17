import React from 'react';
import { Paper, Typography, Container } from '@material-ui/core';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import Fields from './fields';
import { resetPassword } from '@services/authentication';
import { useNotification } from '@hooks';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '50rem',
  },
  login: {
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      height: '35%',
    },
  },
  header: {
    margin: theme.spacing(5, 2, 1),
  },
}));

const doReset = ({ t, notifyError, notifySuccess }) => async ({ email }) => {
  try {
    await resetPassword({ email });
    notifySuccess(t('success.reset-password'));
  } catch (error) {
    notifyError(t('errors.reset-password'));
  }
};

const ResetPassword = () => {
  const classes = useStyles();
  const [t] = useTranslation(['login']);
  const { notifySuccess, notifyError } = useNotification();

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
          onSubmit={doReset({ t, notifyError, notifySuccess })}
        >
          {props => <Fields {...props} />}
        </Formik>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
