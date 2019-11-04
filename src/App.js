import React from 'react';
import { Route, Router, Switch } from 'react-router'
import Home from './containers/Home';
import UserProfile from './containers/UserProfile';
import history from './utils/history';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/index.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NotFound from './components/common/NotFound';
import About from './components/About';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:username" component={UserProfile} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
};

export default App;
