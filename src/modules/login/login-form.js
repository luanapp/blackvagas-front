import React from 'react';
import { Button, LinearProgress, Container } from '@material-ui/core';
import { Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import InputText from '../../components/InputText';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 10),
      margin: 'auto',
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

const LoginForm = ({ isSubmitting }) => {
  const classes = useStyles();
  const [t] = useTranslation(['login']);

  return (
    <Container className={classes.root}>
      <Form>
        <Field component={InputText} name="email" type="email" label={t('email')} className={classes.input} />
        <Field component={InputText} type="password" label={t('password')} name="password" className={classes.input} />
        {isSubmitting && <LinearProgress />}
        <Container className={classes.buttonContainer}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} className={classes.button}>
            {t('enter')}
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default LoginForm;
