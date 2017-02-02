import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './modules/Home'
import ReactMotion from './modules/ReactMotion'
import Motion from './modules/Motion'
import Staggered from './modules/Staggered'
import Transition from './modules/Transition'
import About from './modules/About'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/motion" component={ReactMotion}>
        <Route path="/motion/motion" component={Motion}/>
        <Route path="/motion/staggered" component={Staggered}/>
        <Route path="/motion/transition" component={Transition}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);