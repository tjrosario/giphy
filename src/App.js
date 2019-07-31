import React from "react";

import { 
  ThemeProvider, 
  withStyles 
} from '@material-ui/styles';

import {  
  Paper, 
  Typography, 
  Container, 
  CssBaseline 
} from '@material-ui/core';

import theme from './common/theme/DefaultTheme';
import styles from './common/theme/Styles';

import AppRouter from './AppRouter';

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="xl" className={classes.container}>

          <Typography gutterBottom variant="h1" component="h1">
            Weirdness Calculator
          </Typography>

          <Paper className={classes.paper}>

            <AppRouter />

          </Paper>

        </Container>
      </ThemeProvider>
    );
  }

}

export default withStyles(styles)(App);
