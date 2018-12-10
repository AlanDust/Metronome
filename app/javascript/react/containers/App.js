import React from 'react'
import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MetronomeContainer from './MetronomeContainer';

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={MetronomeContainer} />
    </Router>
  )
}

export default App
