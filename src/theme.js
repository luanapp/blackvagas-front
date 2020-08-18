import { green, grey, red } from '@material-ui/core/colors';

import { createMuiTheme } from '@material-ui/core/styles';

const typography = {
  fontFamily: 'Work Sans, sans-serif',
  fontSize: 14,
  fontWeightLight: 300, // Work Sans
  fontWeightRegular: 400, // Work Sans
  fontWeightMedium: 700, // Roboto Condensed
  fontFamilySecondary: 'Roboto Condensed, sans-serif',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#343434',
    },
    text: {
      secondary: {
        main: '#ff3366',
      },
      warning: {
        main: '#ffc071',
      },
      error: {
        xLight: red[50],
        main: red[500],
        dark: red[700],
      },
      success: {
        xLight: green[50],
        main: green[500],
        dark: green[700],
      },
    },
    background: {
      default: green[200],
      placeholder: grey[200],
      paper: green[500],
    },
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
    fontSize: 16,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: 'Roboto Condensed, sans-serif',
    button: {
      textTransform: 'capitalize',
      color: '#ff3366',
    },
    h1: {
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      fontSize: 48,
    },
    h3: {
      fontSize: 42,
    },
    h4: {
      fontSize: 36,
    },
    h5: {
      fontSize: 20,
      fontWeight: typography.fontWeightRegular,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    body1: {
      fontWeight: typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
  },
});

export default theme;
