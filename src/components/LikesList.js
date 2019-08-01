import React from "react";

import { 
  Grid,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { LIKES } from '../config/index';

import truncate from '../common/utils/truncate';

const useStyles = makeStyles(theme => ({
  gridItem: {
  	position: 'relative'
  },
  iconButton: {
  	position: 'absolute',
  	top: 0,
  	right: 0
  },
  image: {
  	height: '155px'
  },
  rating: {
  	margin: '10px 0 0'
  }
}));

export default function LikesList({ likes, justify, colSpan, removeLike, showRating, imgClassName }) {
	const classes = useStyles();

	return (
		<Grid container spacing={3} justify={justify || 'flex-start'}>
			{likes.map(like =>
				<Grid item xs={6} sm={colSpan || 6} key={like.id} className={classes.gridItem}>
					<Typography gutterBottom variant="body1" align="center">
						{truncate(like.title, 20) || truncate(like.term, 20)}
					</Typography>

					<Card>
						<CardActionArea>
	            <CardMedia
	              image={like.images.downsized_large.url}
	              title={like.title}
	              className={imgClassName || classes.image}
	            />
						</CardActionArea>
					</Card>

					{showRating ?
					<Typography gutterBottom variant="body1" align="center" className={classes.rating}>
						{like.weirdness} / {LIKES.weirdness.max}
					</Typography>
					: null}

					{removeLike ?
					<IconButton className={`fas fa-times ${classes.iconButton}`} onClick={()=> removeLike(like)} />
					: null}
				</Grid>
			)}
		</Grid>
	);
}
