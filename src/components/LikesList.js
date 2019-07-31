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

export default function LikesList({ likes, justify, colSpan, removeLike }) {

	return (
		<Grid container spacing={3} justify={justify || 'flex-start'}>
			{likes.map(like =>
				<Grid item sm={colSpan || 6} key={like.id}>
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
	);
}
