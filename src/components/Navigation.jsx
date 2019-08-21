import React, { Suspense, lazy} from 'react';
import { Router, Link } from "@reach/router";
import Social from './sidenav/Social';

// Component imports
const Home = lazy(() => import('./Home'));
const Resume = lazy(() => import('./Resume'));
const NotFound = () => <p>Sorry, nothing here</p>

export default class Naigation extends React.Component {

  render() {
    return(
      <div>
        <div className="navbar__wrapper">
          <ul className="navbar__list">
            <li className="navbar__list-item"><Link to="/">Home</Link></li>
            <li className="navbar__list-item"><Link to="/resume">Resume</Link></li>
          </ul>
          <Social />
        </div>
        <div className="main-content container">
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
