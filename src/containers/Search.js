import React from "react";
import { connect } from 'react-redux';

import * as GiphyActionCreators from '../actions/giphy';
import * as LikesActionCreators from '../actions/likes';

import {
  TextField,
  Button,
  Icon,
  Typography,
  Container,
  Slider
} from '@material-ui/core';

const mapStateToProps = state => ({
  giphy: state.giphy
});

const mapDispatchToProps = dispatch => ({
  fetchGiphy: term => dispatch(GiphyActionCreators.fetchGiphy(term)),
  updateWeirdness: weirdness => dispatch(GiphyActionCreators.updateWeirdness(weirdness)),
  addLike: like => dispatch(LikesActionCreators.addLike(like))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Search extends React.Component {

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
    const { giphy } = this.props;
    const { result, loading, weirdness } = giphy;
    const { term } = this.state;

    return (
      <div>
        {/* search form */}
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Search Term"
            style={{ margin: 8 }}
            placeholder="e.g - keyboard cat"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleChange}
            value={term}
          />
          <Button variant="contained" type="submit" disabled={loading}>
            Search
          </Button>
        </form>

        {/* search result */}
        <Container maxWidth="lg" align="center" style={{minHeight:'400px'}}>
          <div>
            {result && result.images ?
            <div>
              <Typography gutterBottom variant="h2" component="h2" align="left">
                Your Result
              </Typography>
              
              <div>
                <img src={result.images.downsized_medium.url} style={{maxHeight:'300px'}} />
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
                min={0}
                max={10}
                onChange={this.handleSliderChange}
              />

              <Typography gutterBottom variant="body1" align="left">
                Weirdness: {weirdness}
              </Typography>
            </div>
            : null}
          </div>
        </Container>
        
      </div>
    );
  }

}
