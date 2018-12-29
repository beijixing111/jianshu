import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import Register from './pages/register';
import NoMatch from './pages/nomatch';
import GlobalStyle from './reset';
import Iconfont from './statics/iconfont/iconfont';
import store from './store';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<Fragment>
          <Router>
            <Switch>
              <Route exact path="/" 
                render={
                  () => <Fragment>
                    <Header />
                    <Home />
                  </Fragment> 
                } 
              /> 
              <Route path="/detail/:id" exact render={() => 
                <Fragment>
                  <Header />
                  <Detail />
                </Fragment>
              } /> 
              <Route path="/write" exact component={Write} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
	        <GlobalStyle />
	        <Iconfont />
        </Fragment>
      </Provider>
    );
  }
}

export default App;