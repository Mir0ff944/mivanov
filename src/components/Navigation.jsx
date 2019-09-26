import React, { Suspense, lazy} from 'react';
import posed from 'react-pose';
import Home from './Home';

// Lazy component imports
const Resume = lazy(() => import('./Resume'));
// end of lazy component imports

// Pose sidebar items
const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayDchildren: 400,
    staggerChildren: 150
  },
  closed: { x: '-110%', delay: 300 }
})

const Children = posed.li({
  open: { y: 0, opacity: 1, },
  closed: { y: 20, opacity: 0 }
})
// end of Pose items

export default class Naigation extends React.Component {
  state = { isOpen: false}

  toggleNav = () => this.setState({isOpen: !this.state.isOpen});

  componentDidMount() {
    setTimeout(this.toggleNav, 2000)
  }

  render() {
    const { isOpen } = this.state;

    return(
      <div>
        <div className="navbar__wrapper">
          <div className="navbar-logo__wrapper">
            <img src="placeholder.png" alt="placeholder" className="home-logo-image" />
            </div>
          <Sidebar className="navbar__list" pose={isOpen ? 'open' : 'closed' }>
            <Children className="navbar__list-item">Home</Children>
            <Children className="navbar__list-item">About me</Children>
            <Children className="navbar__list-item">Experience</Children>
            <Children className="navbar__list-item">Portfolio</Children>
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
