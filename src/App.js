import React from 'react';
import './styles/bootstrap.scss';
import './styles/Settings.scss';
import './styles/App.scss';
import './styles/Navigation.scss';
import './styles/Home.scss';

// Main layout
import Navigation from './components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}
