import React, { Suspense, lazy} from 'react';
import { Router, Link } from "@reach/router";
import Social from './sidenav/Social';
import posed from 'react-pose';

// Component imports
const Home = lazy(() => import('./Home'));
const Resume = lazy(() => import('./Resume'));
const NotFound = () => <p>Sorry, nothing here</p>

// Pose sidebar items
const Sidebar = posed.ul({
  open: { x: '0%', delayDchildren: 200, staggerChildren: 100 },
  closed: { x: '-110%', delay: 300 }
})

const Children = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 1 }
})

export default class Naigation extends React.Component {
  state = { isOpen: false}

  toggleNav = () => this.setState({isOpen: !this.state.isOpen});

  componentDidMount() {
    setTimeout(this.toggleNav, 1000)
  }

  render() {
    const { isOpen } = this.state;

    return(
      <div>
        <div className="navbar__wrapper">
          <Sidebar className="navbar__list" pose={isOpen ? 'open' : 'closed' }>
            <Children className="navbar__list-item"><Link to="/">Home</Link></Children>
            <Children className="navbar__list-item"><Link to="/resume">Resume</Link></Children>
          </Sidebar>
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
