import theme from './DefaultTheme';

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    //textAlign: 'center',
    //color: theme.palette.text.secondary,
  },
  avatar: {
    height: 100,
    margin: '0 auto',
    width: 100,
  },
  icon: {
    //color: '##5995d8',
    fontSize: '24px',
  },
  section: {
    margin: '0 0 40px'
  },
  subsection: {
    margin: '0 0 30px'
  },
  divider: {
    margin: '50px auto',
    width: '50%'
  },
  badge: {
    margin: '10px',
    width: '50px'
  }
};

export default styles;
