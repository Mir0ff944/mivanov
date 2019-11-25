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

const Underscore = posed.span({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
})

export default class Home extends React.Component {

  state = { isVisible: false, isScoreVisible: false }

  toggleLogo = () => this.setState({ isVisible: !this.state.isVisible });
  toggleUnderscore = () => this.setState({ isScoreVisible: !this.state.isScoreVisible });
  intervalUnderscore = () => setInterval(this.toggleUnderscore, 700)
  

  componentDidMount() {
    setTimeout(this.toggleLogo, 1500)
    setTimeout(this.toggleLogo, 2900)
    setTimeout(this.toggleLogo, 4000)
    setTimeout(this.intervalUnderscore, 4000)
    setTimeout(clearInterval(this.intervalUnderscore), 7000)
  }

  render() {
    const { isVisible, isScoreVisible } = this.state;

    return(
      <div className="row landing-content--wrapper">
        <div className="col-md-12 landing-content">
          <Logo className="logo-wrapper" pose={isVisible ? 'open' : 'closed'} >
            <img src="placeholder.png" alt="placeholder" className="home-logo-image" />
            <span className="short-bio">
              <ul className="short-bio__list">
                <li>
                  Person.new(
                </li>
                <li className="short-bio__list--item_indent--double">
                  <i>full_name:</i> Miroslav Ivanov
                </li>
                <li className="short-bio__list--item_indent--double">
                  <i>position:</i> Junior Web Developer
                </li>
                <li>
                  ) <Underscore pose={isScoreVisible ? 'visible' : 'hidden'}>_</Underscore>
                </li>
              </ul>
            </span>
          </Logo>
        </div>
      </div>
    )
  }
}
