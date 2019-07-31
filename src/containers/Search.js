import React from "react";
import { connect } from 'react-redux';

import * as GiphyActionCreators from '../actions/giphy';
import * as LikesActionCreators from '../actions/likes';

import { LIKES } from '../config/index';

import {
  TextField,
  Button,
  Icon,
  Typography,
  Container,
  Slider
} from '@material-ui/core';

import {
  withStyles 
} from '@material-ui/styles';

import styles from '../common/theme/Styles';

const mapStateToProps = state => ({
  giphy: state.giphy
});

const mapDispatchToProps = dispatch => ({
  fetchGiphy: term => dispatch(GiphyActionCreators.fetchGiphy(term)),
  updateWeirdness: weirdness => dispatch(GiphyActionCreators.updateWeirdness(weirdness)),
  addLike: like => dispatch(LikesActionCreators.addLike(like))
});

@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  handleChange = (ev) => {
    this.setState({
      term: event.target.value,
    });    
  }

  handleSliderChange = (ev, newVal) => {
    this.props.updateWeirdness(newVal);
    this.handleSubmit();
  }

  handleSubmit = (ev) => {
    if (ev) { ev.preventDefault(); }

    this.props.fetchGiphy(this.state.term);
  }

  render() {
    const { giphy, classes } = this.props;
    const { result, loading, weirdness, error } = giphy;
    const { term } = this.state;
    const minLikes = LIKES.min;

    return (
      <div>
        <Typography variant="body2" align="left">
          Find out how weird you are by selecting the GIFs that make you laugh.  We'll show you the least weird ones to start, but you can move the slider to make them weirder.
        </Typography>

        <Typography variant="body2" align="left">
          When you find a GIF you like, press the <em>Like</em> button.  Once you like {minLikes} GIFs, we'll show you how weird you are.
        </Typography>

        {/* search form */}
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Search Term"
            className={classes.searchField}
            placeholder="e.g - keyboard cat"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
            value={term}
          />
          <Button variant="contained" type="submit" disabled={loading} className={classes.searchButton}>
            Search
          </Button>
        </form>

        {/* search result */}
        <Container maxWidth="lg" align="center">
          <div>
            {result && result.images ?
            <div>
              <Typography gutterBottom variant="h3" component="h3" align="left">
                Your Result
              </Typography>
              
              <div className={classes.searchImageWrap}>
                <img src={result.images.downsized_medium.url} className={classes.searchImage} />
              </div>

              <Button variant="contained" color="primary" onClick={()=> this.props.addLike(result, weirdness)}>
                <Icon className={`far fa-thumbs-up`} />
              </Button>

              <Slider
                defaultValue={weirdness}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={LIKES.weirdness.min}
                max={LIKES.weirdness.max}
                onChange={this.handleSliderChange}
                style={{margin:'20px 0'}}
              />

              <Typography gutterBottom variant="body1" align="left">
                Weirdness: {weirdness}
              </Typography>

              {error ?
                <div className={classes.alert}>
                  <Icon className={`fas fa-exclamation-circle ${classes.alertIcon}`} />
                  {error}
                </div>
              : null}
            </div>
            : null}
          </div>
        </Container>
        
      </div>
    );
  }
}

export default withStyles(styles)(Search);
