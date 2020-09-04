import React from 'react';
import { Paper, Typography, TextField, Button, LinearProgress, Container } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

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
  formContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 10),
      margin: theme.spacing('auto'),
    },
  },
  input: {
    width: '100%',
    margin: theme.spacing(2, 0),
  },
  buttonContainer: {
    display: 'flex',
    margin: theme.spacing(4, 'auto', 2, 'auto'),
  },
  button: {
    margin: 'auto',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [t] = useTranslation(['login']);

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
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Container className={classes.formContainer}>
              <Form>
                <Field component={TextField} name="email" type="email" label={t('email')} className={classes.input} />
                <Field
                  component={TextField}
                  type="password"
                  label={t('password')}
                  name="password"
                  className={classes.input}
                />
                {isSubmitting && <LinearProgress />}
                <Container className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className={classes.button}
                  >
                    {t('enter')}
                  </Button>
                </Container>
              </Form>
            </Container>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Login;
