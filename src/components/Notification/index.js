import React, { useCallback } from 'react';
import { Snackbar, Container } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useNotification } from '@hooks';

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const vertical = 'top';
const horizontal = 'center';
const Notification = () => {
  const classes = useStyles();
  const {
    notification: { message, status },
    removeNotification,
  } = useNotification();

  const handleClose = useCallback(
    (_, reason) => {
      if (reason === 'clickaway') {
        return;
      }

      removeNotification();
    },
    [removeNotification]
  );

  return (
    <Container className={classes.root} data-testid="notification">
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={!!message} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Notification;
