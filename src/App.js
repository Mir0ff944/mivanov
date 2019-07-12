import React, {Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

// Component imports
const Home = lazy(() => import('./components/Home'));
const Resume = lazy(() => import('./components/Resume'));

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
          </ul>

          <hr />
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/" component={Home} />
              <Route path="/resume" component={Resume} />
            </Suspense>
          </Switch>
        </div>
      </Router>
    );
  }
}

