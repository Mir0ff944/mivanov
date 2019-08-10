import React from 'react';
import './styles/bootstrap.scss';
import './styles/bootstrap-grid.scss';
import './styles/App.scss';
import './styles/Navigation.scss';

// Main layout
import Navigation from './components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* Base Layout */}
        <Navigation />
      </div>
    );
  }
}

