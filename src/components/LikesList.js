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
  	height: '100px'
  }
}));

export default function LikesList({ likes, justify, colSpan, removeLike, showRating }) {
	const classes = useStyles();

	return (
		<Grid container spacing={3} justify={justify || 'flex-start'}>
			{likes.map(like =>
				<Grid item sm={colSpan || 6} key={like.id} className={classes.gridItem}>
					<Typography gutterBottom variant="body1" align="center">
						{like.title || like.term}
					</Typography>

					<Card>
						<CardActionArea>
	            <CardMedia
	              image={like.images.downsized_large.url}
	              title={like.title}
	              className={classes.image}
	            />
						</CardActionArea>
					</Card>

					{showRating ?
					<Typography gutterBottom variant="body1" align="center">
						{like.weirdness} / {LIKES.weirdness.max}
					</Typography>
					: null}

					<IconButton className={`fas fa-times ${classes.iconButton}`} onClick={()=> removeLike(like)} />
				</Grid>
			)}
		</Grid>
	);
}
