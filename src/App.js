import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { authStore } from './mobx';
import { styled } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Home, Header, Registration, Login } from './components';
import { ROUTING_SUBPATH } from './config';
import { observer } from 'mobx-react-lite';
import './App.css';

const ProgressWrapper = styled('div')({
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center'
});

const App = () => {
  return (
    <>
      {authStore.loading ? (
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      ) : (
        <div className='App'>
          <Router>
            <Header />
            <Switch>
              <Route exact path={`${ROUTING_SUBPATH}/`}>
                <Home />
              </Route>
              <Route path={`${ROUTING_SUBPATH}/registration`}>
                <Registration />
              </Route>
              <Route path={`${ROUTING_SUBPATH}/login`}>
                <Login />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
};

export default observer(App);
