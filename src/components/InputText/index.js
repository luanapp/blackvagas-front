import React from 'react';
import { TextField } from '@material-ui/core';
import { pathOr, isEmpty } from 'ramda';

const InputText = ({ field, form: { touched, errors }, ...props }) => {
  const error = pathOr('', [field.name], errors);
  const wasTouched = pathOr(false, [field.name], touched);

  return (
    <TextField
      error={wasTouched && !isEmpty(error)}
      helperText={wasTouched && error ? error : ''}
      {...field}
      {...props}
    />
  );
};

export default InputText;
