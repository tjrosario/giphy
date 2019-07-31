import theme from './DefaultTheme';

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
  }
};

export default styles;
