import React from 'react';
import posed from 'react-pose';

const Logo = posed.div({
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { opacity: { ease: 'easeIn', duration: 1500}, }
  },
  closed: {
    x: -10,
    y: -10,
    opacity: 0
  }
})

export default class Home extends React.Component {

  state = { isVisible: false }

  toggleLogo = () => this.setState({ isVisible: !this.state.isVisible });

  componentDidMount() {
    setTimeout(this.toggleLogo, 1000)
  }

  render() {
    const { isVisible } = this.state;

    return(
      <div className="row landing-content--wrapper">
        <div className="col-md-12 landing-content">
          <Logo className="full-name" pose={isVisible ? 'open' : 'closed'} >
            <p>Miroslav</p>
            <p>Ivanov</p>
          </Logo>
        </div>
      </div>
    )
  }
}
