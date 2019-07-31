import theme from './DefaultTheme';

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    margin: '20px 0'
  },
  paper: {
    padding: theme.spacing(3),
  },
  searchField: {
    margin: '0 10px 0 0',
    width: '50%',
  },
  searchButton: {
    fontSize: '14px',
    height: '50px',
  },
  searchImageWrap: {
    height: '325px'
  },
  searchImage: {
    maxHeight: '300px'
  },
  button: {
    fontSize: '16px',
    margin: '20px 0'
  },
  buttonProgress: {
    margin: '0 0 0 25px',
    verticalAlign: 'top',
  },
  alert: {
    background: '#fcf8e3',
    color: '#8a6d3b',
    padding: '15px',
    marginBottom: '20px',
    border: '1px solid #faebcc',
    borderRadius: '4px'
  },
  alertIcon: {
    margin: '0 8px 0 0',
    verticalAlign: 'top'
  },
  imageResult: {
    height: '200px'
  },
  slider: {
    root: {
      color: '#3880ff',
      height: 2,
      margin: '50px 0 20px',
      padding: '15px 0',
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      marginTop: -14,
      marginLeft: -14,
      '&:focus,&:hover,&$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 11px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      backgroundColor: 'currentColor',
    }
  }
};

export default styles;
