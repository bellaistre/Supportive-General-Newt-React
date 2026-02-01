import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
import './i18n';
import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';

const App = () => {
  return (
    <Router basename="/Supportive-General-Newt-React">
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
