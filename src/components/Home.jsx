import React from 'react';
import posed from 'react-pose';

const Logo = posed.div({
  open: {
    opacity: 1,
    transition: {
      opacity: {
        duration: 1300,
        ease: 'easeIn'
      }
    }
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 1500 }
    }
  }
})

export default class Home extends React.Component {

  state = { isVisible: false }

  toggleLogo = () => this.setState({ isVisible: !this.state.isVisible });

  componentDidMount() {
    setTimeout(this.toggleLogo, 1500)
    setTimeout(this.toggleLogo, 2900)
    setTimeout(this.toggleLogo, 4000)
  }

  render() {
    const { isVisible } = this.state;

    return(
      <div className="row landing-content--wrapper">
        <div className="col-md-12 landing-content">
          <Logo className="logo-wrapper" pose={isVisible ? 'open' : 'closed'} >
            <img src="placeholder.png" alt="placeholder" className="home-logo-image" />
          </Logo>
        </div>
      </div>
    )
  }
}
