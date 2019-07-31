import React from "react";

import { 
  Grid
} from '@material-ui/core';

import Search from '../containers/Search';
import LikesList from '../containers/LikesList';

export default function ResultsView() {

	return (
    <Grid container spacing={3} justify="center">
      <Grid item sm={7}>
        <Search />
      </Grid>

      <Grid item sm={5}>
        <LikesList 
          header={'Your liked GIFs'}
          colSpan={6}
        />
      </Grid>
    </Grid>
	);
}
