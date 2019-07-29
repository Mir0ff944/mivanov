import React, { lazy } from 'react';
import './styles/bootstrap.scss';
import './styles/bootstrap-grid.scss';
import './styles/App.scss';

// Component imports
const Navigation = lazy(() => import('./components/Navigation'));

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* Base Layout */}
        <Navigation />
      </div>
    );
  }
}

