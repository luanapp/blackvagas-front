import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const blackHex = '#2D3037';
const yellowHex = '#f2d071';
const titleColor = '#37474F';
const primaryColor = '#959595';
const buttonPrimaryColor = '#FBC226';

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
        color: titleColor,
        backgroundColor: buttonPrimaryColor,
        '&:hover': {
          backgroundColor: fade(buttonPrimaryColor, 0.7),
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        whiteSpace: 'nowrap',
      },
    },
    MuiLink: {
      root: {
        '&:hover': {
          cursor: 'pointer',
        },
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
      primary: titleColor,
      secondary: primaryColor,
    },
  },
  typography: {
    ...typography,
    h5: {
      color: titleColor,
      fontWeight: 'bold',
    },
    button: {
      fontSize: 16,
      textTransform: 'capitalize',
      whiteSpace: 'nowrap',
    },
  },
});

export default responsiveFontSizes(theme, {
  breakpoints: ['xs', 'sm', 'md', 'lg'],
});
