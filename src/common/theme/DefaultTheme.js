import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const meriweather = "'Merriweather', serif";
const montserrat = "'Montserrat', sans-serif";

let theme = createMuiTheme({

  typography: {
    h1: {
      color: '#504d4d',
      fontSize: '2.4rem',
      fontFamily: montserrat,
      textTransform: 'uppercase'
    },
    h2: {
      fontSize: '2.0rem',
      fontFamily: meriweather,
      color: '#bb7878'
    },
    h3: {
      fontSize: '1.4rem',
      fontFamily: meriweather,
      lineHeight: '1.5',
      marginTop: '20px'
    },
    h4: {
      color: '#666',
      fontSize: '1.1rem',
      fontFamily: meriweather
    },
    h5: {
      fontSize: '1.2rem',
      fontFamily: meriweather
    },
    h6: {
      fontSize: '1.1rem',
      fontFamily: meriweather
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '.8rem'
    },
    fontSize: 10,
    fontFamily: montserrat,
    useNextVariants: true
  },
});

theme = responsiveFontSizes(theme);

export default theme;
