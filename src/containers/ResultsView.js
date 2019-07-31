import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
  Grid,
  Typography,
  Button,
  Container
} from '@material-ui/core';

import {
  withStyles 
} from '@material-ui/styles';

import styles from '../common/theme/Styles';

import LikesList from '../components/LikesList';

const mapStateToProps = state => ({
  likes: state.likes.collection
});

@connect(mapStateToProps)
class ResultsView extends React.Component {

	handleStartOver = () => {
		this.props.history.push('/');
	}

	render() {
		const { likes, classes } = this.props;

		return (
			<Container maxWidth="lg" align="center">
				<Typography gutterBottom variant="h3" component="h3" align="left">
					The GIFs you liked
				</Typography>

	      <LikesList 
	        colSpan={2}
	        likes={likes}
	        justify={'center'}
	        showRating={true}
	      />

        <Button variant="contained" color="primary" onClick={this.handleStartOver} className={classes.button}>
          Start Over
        </Button>
			</Container>
		);
	}
}

export default withRouter((withStyles(styles)(ResultsView)))
