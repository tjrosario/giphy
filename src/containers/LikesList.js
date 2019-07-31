import React from "react";
import { connect } from 'react-redux';

import * as LikesActionCreators from '../actions/likes';

const mapStateToProps = state => ({
  likes: state.likes
});

const mapDispatchToProps = dispatch => ({
  removeLike: like => dispatch(LikeActionCreators.removeLike(like))
});
