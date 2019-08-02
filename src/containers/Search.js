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
  Slider,
  CircularProgress
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

const WeirdnessSlider = withStyles(styles.slider)(Slider);

@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      valid: true,
      imgLoading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.giphy.loading !== this.props.giphy.loading) {
      this.setState({ imgLoading: nextProps.giphy.loading });
    }
  }

  handleChange = (ev) => {
    const term = event.target.value;

    if (!term) {
      this.setState({ valid: false });
    }

    this.setState({
      term,
      valid: true
    });    
  }

  handleSliderChange = (ev, newVal) => {
    this.props.updateWeirdness(newVal);
    this.handleSubmit();
  }

  handleSubmit = (ev) => {
    if (ev) { ev.preventDefault(); }

    if (!this.state.term) {
      this.setState({ valid: false });
      return false;
    }

    this.setState({ valid: true, imgLoading: true });
    this.props.fetchGiphy(this.state.term);
  }

  handleImageLoaded = () => this.setState({ imgLoading: false })

  handleImageError = () => this.setState({ imgLoading: false })

  render() {
    const { giphy, classes } = this.props;
    const { result, loading, weirdness, error } = giphy;
    const { term, valid, imgLoading } = this.state;
    const minLikes = LIKES.min;

    const isLoading = loading || imgLoading;

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
            error={!valid}
          />
          <Button variant="contained" type="submit" disabled={isLoading} className={classes.searchButton}>
            Search
          </Button>

          {isLoading ?
            <CircularProgress className={classes.buttonProgress} />
          : null}
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
                <img 
                  src={result.images.downsized_medium.url} 
                  className={isLoading ? classes.searchImageFaded : classes.searchImage} 
                  onLoad={this.handleImageLoaded.bind(this)}
                  onError={this.handleImageError.bind(this)}
                />
              </div>

              <Button variant="contained" color="primary" onClick={()=> this.props.addLike(result)} disabled={isLoading}>
                <Icon className={`far fa-thumbs-up`} />
              </Button>

              <WeirdnessSlider
                defaultValue={weirdness}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={LIKES.weirdness.min}
                max={LIKES.weirdness.max}
                onChange={this.handleSliderChange}
                disabled={!valid}
              />

              <Typography gutterBottom variant="body1" align="left">
                Weirdness: {weirdness}
              </Typography>
            </div>
            : null}

          </div>
        </Container>
        
        {error ?
          <div className={classes.alert}>
            <Icon className={`fas fa-exclamation-circle ${classes.alertIcon}`} />
            {error}
          </div>
        : null}
      </div>
    );
  }
}

export default withStyles(styles)(Search);
