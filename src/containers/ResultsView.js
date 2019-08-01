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

import * as GiphyActionCreators from '../actions/giphy';

import styles from '../common/theme/Styles';

import LikesList from '../components/LikesList';

import { LIKES } from '../config/index';

const mapStateToProps = state => ({
  likes: state.likes.collection
});

const mapDispatchToProps = dispatch => ({
  startOver: () => dispatch(GiphyActionCreators.startOver())
});

@connect(mapStateToProps, mapDispatchToProps)
class ResultsView extends React.Component {

  handleStartOver = () => {
    this.props.startOver();
    this.props.history.push('/');
  }

  getAverage = (likes) => {
    const sum = likes
      .map(like => like.weirdness)
      .reduce((prev, curr) => prev + curr, 0);

    const avg = sum / likes.length;

    return Math.round(avg);
  }

  render() {
    const { likes, classes } = this.props;

    return (
      <Container maxWidth="lg" align="center">

        {likes.length > 0 ?
        <div>
          <Typography variant="h3" component="h3">
            You scored a {this.getAverage(likes)} out of {LIKES.weirdness.max} on the weirdness scale!
          </Typography>

          <Typography variant="h4" component="h4" align="left">
            The GIFs you liked
          </Typography>

          <LikesList 
            colSpan={2}
            likes={likes}
            justify={'center'}
            showRating={true}
            imgClassName={classes.imageResult}
          />
        </div>
        : null}

        <Button variant="contained" color="primary" onClick={this.handleStartOver} className={classes.button}>
          Start Over
        </Button>
      </Container>
    );
  }
}

export default withRouter((withStyles(styles)(ResultsView)))
