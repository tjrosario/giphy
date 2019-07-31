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

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="lg">

        	<Paper className={classes.paper}>

        		<Grid container spacing={3} justify="center">
        			<Grid item sm={8}>
        				col a
        			</Grid>

        			<Grid item sm={4}>
        				col b
        			</Grid>
        		</Grid>

        	</Paper>

        </Container>
      </ThemeProvider>
    );
  }

}

export default withStyles(styles)(App);
