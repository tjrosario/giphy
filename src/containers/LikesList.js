import React from "react";
import { connect } from 'react-redux';

import * as LikesActionCreators from '../actions/likes';
import { MIN_NUMBER_LIKES as minLikes } from '../config/index';

import { 
  Typography, 
  IconButton, 
  Button, 
  Grid, 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia,
} from '@material-ui/core';

const mapStateToProps = state => ({
  likes: state.likes.collection
});

const mapDispatchToProps = dispatch => ({
  removeLike: like => dispatch(LikesActionCreators.removeLike(like))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Search extends React.Component {

	render() {
		const { likes, removeLike } = this.props;

		const canCalculate = likes.length === minLikes;

		return (
			<div>
				<Typography gutterBottom variant="h3" component="h3">
					Your Liked Gifs
				</Typography>

				{likes.length > 0 ?
					<div>
						<Grid container spacing={3}>
						{likes.map(like =>
							<Grid item sm={6} key={like.id}>
								<Card>
									<CardActionArea>
										<CardContent>
			                <Typography gutterBottom variant="body1" align="center">
			                  {like.title}
			                </Typography>
										</CardContent>

		                <CardMedia
		                  image={like.images.downsized_large.url}
		                  title={like.title}
		                  style={{height:'150px'}}
		                />
									</CardActionArea>

		              <CardActions>
		                <IconButton className="fas fa-times" onClick={()=> removeLike(like)} />
		              </CardActions>

								</Card>

							</Grid>
						)}
						</Grid>

	          <Button variant="contained" color="primary" disabled={!canCalculate}>
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
			</div>
		);
	}

}
