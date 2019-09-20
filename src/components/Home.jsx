import React from 'react';
import posed from 'react-pose';

const Logo = posed.div({
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { opacity: { ease: 'easeInOut', duration: 2000 }, duration: 2000}
  },
  closed: {
    x: -40,
    y: -20,
    opacity: 0,
    transition: {
      opacity: { ease: 'easeInOut', duration: 2000 }, duration: 2000}
  }
})

export default class Home extends React.Component {

  state = { isVisible: false }

  toggleLogo = () => this.setState({ isVisible: !this.state.isVisible });

  componentDidMount() {
    setTimeout(this.toggleLogo, 1000)
    setTimeout(this.toggleLogo, 3500)
    // setInterval(() => {
    //   this.toggleLogo()
    // }, 2000);
  }

  render() {
    const { isVisible } = this.state;

    return(
      <div className="row landing-content--wrapper">
        <div className="col-md-12 landing-content">
          <Logo className="logo-wrapper" pose={isVisible ? 'open' : 'closed'} >
            <img src="placeholder.png" alt="placeholder" class="home-logo-image" />
          </Logo>
        </div>
      </div>
    )
  }
}
