import React, { Suspense, lazy} from 'react';
import { Router, Link } from "@reach/router";

// Component imports
const Home = lazy(() => import('./Home'));
const Resume = lazy(() => import('./Resume'));
const NotFound = () => <p>Sorry, nothing here</p>

export default class Naigation extends React.Component {

  render() {
    return(
      <div className="row">
        <div className="navbar-wrapper col-sm-3">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </div>

        <div className="col offset-sm-3">
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <NotFound default />
              <Home path="/" />
              <Resume path="/resume" />
            </Router>
          </Suspense>
        </div>
      </div>
    );
  }
}
