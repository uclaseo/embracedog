import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './HelloWorld.jsx';
import Dogs from './Dogs.jsx';

const NoURL = () => <h1>NoURL MATCHED</h1>;

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HelloWorld} />
            <Route path="/dogs" component={Dogs} />
            <Route component={NoURL} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
