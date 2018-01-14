import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './HelloWorld.jsx';
import Dogs from './Dogs.jsx';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const NoURL = () => <h1>NoURL MATCHED</h1>;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Provider store={store}>
            <div>
              <Switch>
                <Route exact path="/" component={HelloWorld} />
                <Route exact path="/dogs" component={Dogs} />
                <Route component={NoURL} />
              </Switch>
            </div>
          </Provider>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
