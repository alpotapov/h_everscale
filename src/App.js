import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CompetitionPage from './pages/CompetitionPage/CompetitionPage';

import './index.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:competitionId?">
          <CompetitionPage />
        </Route>
      </Switch>
    </Router>
  );
}
