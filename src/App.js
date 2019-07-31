import React from "react";

import { 
  ThemeProvider, 
  withStyles 
} from '@material-ui/styles';

import { 
  Grid, 
  Paper, 
  Typography, 
  Divider, 
  Container, 
  CssBaseline 
} from '@material-ui/core';

import theme from './common/theme/DefaultTheme';
import styles from './common/theme/Styles';

import Search from './containers/Search';
import LikesList from './containers/LikesList';

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="lg">

          <Typography gutterBottom variant="h1" component="h1">
            Weirdness Calculator
          </Typography>

          <Paper className={classes.paper}>

            <Grid container spacing={3} justify="center">
              <Grid item sm={7}>
                <Search />
              </Grid>

              <Grid item sm={5}>
                <LikesList />
              </Grid>
            </Grid>

          </Paper>

        </Container>
      </ThemeProvider>
    );
  }

}

export default withStyles(styles)(App);
