import { green, grey, red, yellow } from '@material-ui/core/colors';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const blackHex = '#2D3037';
const yellowHex = '#f2d071';

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
        color: yellowHex,
      },
      containedSecondary: {
        color: blackHex,
        backgroundColor: yellowHex,
      },
    },
    MuiSvgIcon: {
      colorPrimary: {
        color: yellowHex,
      },
    },
    MuiInputLabel: {
      formControl: {
        color: yellowHex,
        whiteSpace: 'nowrap',
      },
    },
    MuiSelect: {
      root: {
        borderBottom: `1px solid ${yellowHex}`,
      },
      icon: {
        color: yellowHex,
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: blackHex,
      },
    },
  },

  palette: {
    primary: {
      main: blackHex,
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: yellowHex,
    },
    text: {
      primary: yellowHex,
      secondary: blackHex,
    },
  },
  typography: {
    ...typography,
    button: {
      fontSize: 16,
      textTransform: 'capitalize',
      color: '#ff3366',
      whiteSpace: 'nowrap',
    },
  },
});

export default responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg'],
});
