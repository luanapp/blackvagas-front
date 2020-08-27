import { green, grey, red } from '@material-ui/core/colors';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const typography = {
  fontFamily: 'Work Sans, sans-serif',
  fontSize: 14,
  fontWeightLight: 300, // Work Sans
  fontWeightRegular: 400, // Work Sans
  fontWeightMedium: 700, // Roboto Condensed
  fontFamilySecondary: 'Roboto Condensed, sans-serif',
};

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
      },
      containedPrimary: {
        color: '#f2d071',
      },
      containedSecondary: {
        color: '#343434',
        backgroundColor: '#f2d071',
      },
    },
    MuiSvgIcon: {
      colorPrimary: {
        color: '#f2d071',
      },
    },
  },

  palette: {
    primary: {
      main: '#343434',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#f2d071',
    },
    text: {
      primary: '#f2d071',
      secondary: '#343434',
    },
  },
  typography: {
    ...typography,
    button: {
      fontSize: 16,
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
      fontSize: 22,
      fontWeight: typography.fontWeightMedium,
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

export default responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg'],
});
