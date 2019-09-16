import React, { Suspense, lazy} from 'react';
import { Router, Link } from "@reach/router";
import Social from './sidenav/Social';
import posed from 'react-pose';
import Home from './Home';

// Lazy component imports
const Resume = lazy(() => import('./Resume'));

// Pose sidebar items
const Sidebar = posed.ul({
  open: { x: '0%', delayDchildren: 200, staggerChildren: 100 },
  closed: { x: '-110%', delay: 300 }
})

const Children = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
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
            <Children className="navbar__list-item">Home</Children>
            <Children className="navbar__list-item">Resume</Children>
          </Sidebar>
        </div>
        <div className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <Home />
              <Resume />
            </div>
          </Suspense>
        </div>
      </div>
    );
  }
}
