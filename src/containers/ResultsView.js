import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
  Grid,
  Typography,
  Button,
  Container
} from '@material-ui/core';

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
		const { likes } = this.props;

		return (
			<Container maxWidth="lg" align="center">
				<Typography gutterBottom variant="h2" component="h2" align="left">
					The GIFs you liked
				</Typography>

	      <LikesList 
	        colSpan={2}
	        likes={likes}
	        justify={'center'}
	      />

        <Button variant="contained" color="primary" onClick={this.handleStartOver}>
          Start Over
        </Button>
			</Container>
		);
	}
}

export default withRouter(ResultsView);
