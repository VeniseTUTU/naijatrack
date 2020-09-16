import React, {Suspense} from "react";
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import Loader from './components/uiSources/loading';

const Home = React.lazy(() => import(/* webpackChunkName: 'FrontPage' */ './components/containers/home'));
const Visualize = React.lazy(() => import(/* webpackChunkName: 'FrontPage' */ './components/containers/visualize'));
const Playground = React.lazy(() => import(/* webpackChunkName: 'FrontPage' */ './components/containers/Playground'));
const Report = React.lazy(() => import(/* webpackChunkName: 'FrontPage' */ './components/containers/Report'));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
   <Router basename="./">
   <Switch>
       <Route exact path="/" component={Home} />
       <Route  path="/visualize" component={Visualize} />
       <Route  path="/playground/:id" component={Playground} />
       <Route  path="/report" component={Report} />
       </Switch> 
    </Router>
  </Suspense>, 

 document.getElementById('app')
)