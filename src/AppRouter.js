import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import IndexView from './containers/IndexView';
import ResultsView from './containers/ResultsView';

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={IndexView} />
      <Route path='/results' component={ResultsView} />
    </Router>
  );
}
