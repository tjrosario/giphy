import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
  Grid,
  Typography,
  Button
} from '@material-ui/core';

import Search from '../containers/Search';
import LikesList from '../components/LikesList';
import { MIN_NUMBER_LIKES as minLikes } from '../config/index';

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
		const { likes, removeLike } = this.props;
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

		          <Button variant="contained" color="primary" disabled={!canCalculate} onClick={this.handleCalculate}>
		            Calculate My Weirdness Score
		          </Button>

							<Typography variant="body1" gutterBottom paragraph>
								You must like {minLikes - likes.length} more GIF to calculate your score.
							</Typography>

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

export default withRouter(IndexView);
