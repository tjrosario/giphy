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

import Search from '../containers/Search';
import LikesList from '../components/LikesList';
import { LIKES } from '../config/index';

import * as GiphyActionCreators from '../actions/giphy';
import * as LikesActionCreators from '../actions/likes';

const mapStateToProps = state => ({
  likes: state.likes.collection
});

const mapDispatchToProps = dispatch => ({
  removeLike: like => dispatch(LikesActionCreators.removeLike(like))
});

@connect(mapStateToProps, mapDispatchToProps)
class IndexView extends React.Component {
	
	handleCalculate = () => this.props.history.push('/results')

	render() {
		const { likes, removeLike, classes } = this.props;
		const minLikes = LIKES.min;
		const canCalculate = likes.length === minLikes;

		return (
	    <Grid container spacing={3} justify="center">
	      <Grid item sm={7}>
	        <Search />
	      </Grid>

	      <Grid item sm={5}>
					<Typography gutterBottom variant="h3" component="h3">
						Your Liked GIFs
					</Typography>

	      	{likes.length > 0 ?
	      		<div>
			        <LikesList 
			          colSpan={6}
			          likes={likes}
			          removeLike={removeLike}
			        />

			        <Container align="center">
			          <Button variant="contained" color="primary" disabled={!canCalculate} onClick={this.handleCalculate} className={classes.button}>
			            Calculate My Weirdness Score
			          </Button>

			          {likes.length < minLikes ?
								<Typography variant="body1" gutterBottom paragraph>
									You must like {minLikes - likes.length} more GIF to calculate your score.
								</Typography>
								: null}
		          </Container>

			      </div>
		      :
						<Typography variant="body1" gutterBottom paragraph>
							You haven't liked anything yet.
						</Typography>
					}

	      </Grid>
	    </Grid>
		);
	}
}

export default withRouter((withStyles(styles)(IndexView)))
