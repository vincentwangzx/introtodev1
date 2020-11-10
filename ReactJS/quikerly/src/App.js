import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Delivery } from './Delivery';
import { Joinus } from './Joinus';
import { faq } from './faq';
import { Contactus } from './Contactus';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/book-a-delivery" component={Delivery} />
            <Route path="/join-us" component={Joinus} />
            <Route path="/faq" component={faq} />
            <Route path="/contact" component={Contactus} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  };

}

export default App;
